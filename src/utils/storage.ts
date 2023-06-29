import type {SupabaseClient} from '@supabase/supabase-js';

export const uploadFileToSupabase = async ({
  file,
  bucket,
  destPath,
  supabase,
}: {
  file: string;
  bucket: string;
  destPath: string;
  supabase: SupabaseClient;
}): Promise<string> => {
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
