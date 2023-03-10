import type {Database} from './supabase';

export type TupleToUnion<T extends readonly unknown[]> = T[number];

export type Model = Database['public']['Tables'];
