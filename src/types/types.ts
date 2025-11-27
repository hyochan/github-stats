import type {Database} from './supabase';

export type TupleToUnion<T extends readonly unknown[]> = T[number];

export type Model = Database['public']['Tables'];

// Table aliases for convenience
export type PluginRow = Model['plugins']['Row'];
export type PluginInsert = Model['plugins']['Insert'];
export type UserPluginRow = Model['user_plugins']['Row'];
export type UserPluginInsert = Model['user_plugins']['Insert'];
export type StatsRow = Model['stats']['Row'];
export type StatsInsert = Model['stats']['Insert'];
export type TrophiesRow = Model['trophies']['Row'];
export type TrophiesInsert = Model['trophies']['Insert'];
export type NewsLetterInsert = Model['news_letters']['Insert'];
