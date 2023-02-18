import {
  BlobServiceClient,
  StorageSharedKeyCredential,
} from '@azure/storage-blob';

import type Stream from 'stream';
import {assert} from './assert';

// eslint-disable-next-line
require('dotenv').config();

const {STORAGE_ACCOUNT, STORAGE_KEY, STORAGE_ENDPOINT} = process.env;

const blobService =
  STORAGE_ACCOUNT && STORAGE_KEY && STORAGE_ENDPOINT
    ? new BlobServiceClient(
        STORAGE_ENDPOINT,
        new StorageSharedKeyCredential(STORAGE_ACCOUNT, STORAGE_KEY),
      )
    : undefined;

export function resolveBlobName(destFile: string, destDir: string): string {
  destDir = destDir ? `${destDir}/` : '';

  return decodeURIComponent(`${destDir}${destFile}`);
}

/**
 * Upload a file stream to Azure Storage.
 * @param stream Stream to be uploaded.
 * @param destFile Destination file name.
 * @param destDir Destination directory name.
 * @param containerName Azure storage container name. This should be created on the server-side before using.
 * @returns Azure Storage URL.
 */
export const uploadFileToAzureBlobFromStream = async (
  stream: Stream.Readable,
  destFile: string,
  destDir: string,
  containerName: string,
): Promise<string> => {
  try {
    assert(blobService, 'Azure Storage is not initialized.');
    assert(containerName, 'Missing environment variable containerName');

    const containerClient = blobService.getContainerClient(containerName);

    const blockBlobClient = containerClient.getBlockBlobClient(
      resolveBlobName(destFile, destDir),
    );

    await blockBlobClient.uploadStream(stream);

    return blockBlobClient.url;
  } catch (e: any) {
    throw new Error(e);
  }
};

/**
 * Upload a file to Azure Storage.
 * @param file Path to the file to be uploaded.
 * @param destFile destination file name.
 * @param destDir Destination directory name.
 * @param containerName Azure storage container name. This should be created on the server-side before using.
 * @returns Azure Storage URL.
 */
export const uploadFileToAzureBlobFromFile = async (
  file: string,
  destFile: string,
  destDir: string,
  containerName: string,
): Promise<string> => {
  assert(blobService, 'Azure Storage is not initialized.');
  assert(containerName, 'Missing environment variable containerName');

  const blockBlobClient = blobService
    .getContainerClient(containerName)
    .getBlockBlobClient(resolveBlobName(destFile, destDir));

  await blockBlobClient.uploadFile(file);

  return blockBlobClient.url;
};

/**
 * Upload a file to Azure Storage.
 * @param deleteURL Azure file url to delete
 * @returns Azure Storage URL | undefined
 */
export const removeFileFromAzureBlobContainer = async (
  deleteURL: string,
): Promise<string | undefined> => {
  assert(blobService, 'Azure Storage is not initialized.');

  const blobRootURL = blobService.url;
  deleteURL = decodeURI(deleteURL);

  if (!deleteURL.startsWith(blobRootURL)) {
    return;
  }

  const fileName = deleteURL.replace(blobRootURL, '').split('/');
  const containerName = fileName.shift();
  const blobName = fileName.shift();

  if (containerName && blobName) {
    const decodedBlobName = decodeURIComponent(blobName);
    const containerClient = blobService.getContainerClient(containerName);
    const blockBlobClient = containerClient.getBlockBlobClient(decodedBlobName);

    blockBlobClient.deleteIfExists();

    return blockBlobClient.url;
  }

  return undefined;
};
