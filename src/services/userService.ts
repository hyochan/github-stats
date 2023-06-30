import type {SupabaseClient, User} from '@supabase/supabase-js';

import type {Model} from '~/src/types/types';

type DatabaseUser = Model['users']['Row'];

type UpsertUser = {
  supabase: SupabaseClient;
  user: User | null;
};

export const upsertUser = async ({
  supabase,
  user,
}: UpsertUser): Promise<DatabaseUser | null> => {
  if (!user || !user.id) {
    return null;
  }

  const dbUser: DatabaseUser = {
    id: user.id,
    email: user.email || null,
    phone: user.phone || null,
    created_at: user.created_at,
    updated_at: user.updated_at || null,
    blog: null,
    birthday: null,
    certified: null,
    company: null,
    deleted_at: null,
    description: null,
    gender: null,
    github_login: user.user_metadata.user_name,
    github_url: `https://github.com/${user.user_metadata.user_name}`,
    locale: null,
    location: null,
    name: user.user_metadata.name,
    twitter: null,
  };

  try {
    const {data, error} = await supabase
      .from('users')
      .upsert([{...dbUser}])
      .single();

    if (data) {
      await supabase.from('images').update({
        user_id: user.id,
        image_url: user.user_metadata?.avatar_url,
        thumb_url: user.user_metadata?.avatar_url,
        created_at: user.created_at,
      });
    }

    if (error) {
      throw error;
    }

    return data;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);

    return null;
  }
};
