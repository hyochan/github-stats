export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export type Model = Database['public']['Tables'];

export interface Database {
  public: {
    Tables: {
      _prisma_migrations: {
        Row: {
          applied_steps_count: number
          checksum: string
          finished_at: string | null
          id: string
          logs: string | null
          migration_name: string
          rolled_back_at: string | null
          started_at: string
        }
        Insert: {
          applied_steps_count?: number
          checksum: string
          finished_at?: string | null
          id: string
          logs?: string | null
          migration_name: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Update: {
          applied_steps_count?: number
          checksum?: string
          finished_at?: string | null
          id?: string
          logs?: string | null
          migration_name?: string
          rolled_back_at?: string | null
          started_at?: string
        }
      }
      Image: {
        Row: {
          createdAt: string | null
          deletedAt: string | null
          id: string
          imageUrl: string | null
          thumbUrl: string | null
          thumbUrlHigh: string | null
          updatedAt: string | null
          userId: string | null
        }
        Insert: {
          createdAt?: string | null
          deletedAt?: string | null
          id?: string
          imageUrl?: string | null
          thumbUrl?: string | null
          thumbUrlHigh?: string | null
          updatedAt?: string | null
          userId?: string | null
        }
        Update: {
          createdAt?: string | null
          deletedAt?: string | null
          id?: string
          imageUrl?: string | null
          thumbUrl?: string | null
          thumbUrlHigh?: string | null
          updatedAt?: string | null
          userId?: string | null
        }
      }
      NewsLetter: {
        Row: {
          createdAt: string | null
          deletedAt: string | null
          email: string
          updatedAt: string | null
        }
        Insert: {
          createdAt?: string | null
          deletedAt?: string | null
          email: string
          updatedAt?: string | null
        }
        Update: {
          createdAt?: string | null
          deletedAt?: string | null
          email?: string
          updatedAt?: string | null
        }
      }
      Plugin: {
        Row: {
          apiURL: string
          createdAt: string | null
          deletedAt: string | null
          description: string | null
          id: string
          json: Json | null
          updatedAt: string | null
        }
        Insert: {
          apiURL: string
          createdAt?: string | null
          deletedAt?: string | null
          description?: string | null
          id: string
          json?: Json | null
          updatedAt?: string | null
        }
        Update: {
          apiURL?: string
          createdAt?: string | null
          deletedAt?: string | null
          description?: string | null
          id?: string
          json?: Json | null
          updatedAt?: string | null
        }
      }
      Stats: {
        Row: {
          description: string | null
          iconURL: string | null
          iconURLSelected: string | null
          id: string
          name: string
          score: number
          statsElements: Json | null
          userPluginLogin: string | null
        }
        Insert: {
          description?: string | null
          iconURL?: string | null
          iconURLSelected?: string | null
          id?: string
          name: string
          score: number
          statsElements?: Json | null
          userPluginLogin?: string | null
        }
        Update: {
          description?: string | null
          iconURL?: string | null
          iconURLSelected?: string | null
          id?: string
          name?: string
          score?: number
          statsElements?: Json | null
          userPluginLogin?: string | null
        }
      }
      Trophy: {
        Row: {
          id: string
          points: number
          score: number
          type: string
          userPluginLogin: string | null
        }
        Insert: {
          id?: string
          points?: number
          score: number
          type: string
          userPluginLogin?: string | null
        }
        Update: {
          id?: string
          points?: number
          score?: number
          type?: string
          userPluginLogin?: string | null
        }
      }
      User: {
        Row: {
          birthday: string | null
          blog: string | null
          certified: boolean | null
          company: string | null
          createdAt: string | null
          deletedAt: string | null
          description: string | null
          email: string | null
          gender: Database["public"]["Enums"]["Gender"] | null
          githubLogin: string | null
          githubURL: string | null
          id: string
          locale: string | null
          location: string | null
          name: string | null
          phone: string | null
          twitter: string | null
          updatedAt: string | null
        }
        Insert: {
          birthday?: string | null
          blog?: string | null
          certified?: boolean | null
          company?: string | null
          createdAt?: string | null
          deletedAt?: string | null
          description?: string | null
          email?: string | null
          gender?: Database["public"]["Enums"]["Gender"] | null
          githubLogin?: string | null
          githubURL?: string | null
          id?: string
          locale?: string | null
          location?: string | null
          name?: string | null
          phone?: string | null
          twitter?: string | null
          updatedAt?: string | null
        }
        Update: {
          birthday?: string | null
          blog?: string | null
          certified?: boolean | null
          company?: string | null
          createdAt?: string | null
          deletedAt?: string | null
          description?: string | null
          email?: string | null
          gender?: Database["public"]["Enums"]["Gender"] | null
          githubLogin?: string | null
          githubURL?: string | null
          id?: string
          locale?: string | null
          location?: string | null
          name?: string | null
          phone?: string | null
          twitter?: string | null
          updatedAt?: string | null
        }
      }
      UserPlugin: {
        Row: {
          avatarUrl: string | null
          certificationNo: number | null
          certifiedAt: string | null
          createdAt: string | null
          deletedAt: string | null
          description: string | null
          githubId: string
          json: Json | null
          login: string
          pluginId: string | null
          score: number
          updatedAt: string | null
          userId: string | null
          userName: string | null
          viewCount: number | null
        }
        Insert: {
          avatarUrl?: string | null
          certificationNo?: number | null
          certifiedAt?: string | null
          createdAt?: string | null
          deletedAt?: string | null
          description?: string | null
          githubId: string
          json?: Json | null
          login: string
          pluginId?: string | null
          score?: number
          updatedAt?: string | null
          userId?: string | null
          userName?: string | null
          viewCount?: number | null
        }
        Update: {
          avatarUrl?: string | null
          certificationNo?: number | null
          certifiedAt?: string | null
          createdAt?: string | null
          deletedAt?: string | null
          description?: string | null
          githubId?: string
          json?: Json | null
          login?: string
          pluginId?: string | null
          score?: number
          updatedAt?: string | null
          userId?: string | null
          userName?: string | null
          viewCount?: number | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      AuthType: "email" | "github" | "apple"
      Gender: "male" | "female"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
