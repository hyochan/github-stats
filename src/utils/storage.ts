import {getSupabaseBrowserClient} from './supabaseBrowserClient';

export const uploadFileToSupabase = async ({
  file,
  bucket,
  destPath,
}: {
  file: string;
  bucket: string;
  destPath: string;
}): Promise<string> => {
  const supabase = getSupabaseBrowserClient();
  const {data, error} = await supabase.storage
    .from(bucket)
    .upload(destPath, file, {
      cacheControl: '3600',
      upsert: true,
    });

  if (error) {
    throw new Error(error.message);
  }

  return data.path;
};
