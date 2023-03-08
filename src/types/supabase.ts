export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

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
      images: {
        Row: {
          created_at: string | null
          deleted_at: string | null
          id: string
          image_url: string | null
          thumb_url: string | null
          thumb_url_high: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          deleted_at?: string | null
          id?: string
          image_url?: string | null
          thumb_url?: string | null
          thumb_url_high?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          deleted_at?: string | null
          id?: string
          image_url?: string | null
          thumb_url?: string | null
          thumb_url_high?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
      }
      news_letters: {
        Row: {
          created_at: string | null
          deleted_at: string | null
          email: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          deleted_at?: string | null
          email: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          deleted_at?: string | null
          email?: string
          updated_at?: string | null
        }
      }
      plugins: {
        Row: {
          api_url: string
          created_at: string | null
          deleted_at: string | null
          description: string | null
          id: string
          json: Json | null
          updated_at: string | null
        }
        Insert: {
          api_url: string
          created_at?: string | null
          deleted_at?: string | null
          description?: string | null
          id?: string
          json?: Json | null
          updated_at?: string | null
        }
        Update: {
          api_url?: string
          created_at?: string | null
          deleted_at?: string | null
          description?: string | null
          id?: string
          json?: Json | null
          updated_at?: string | null
        }
      }
      stats: {
        Row: {
          description: string | null
          icon_url: string | null
          icon_url_selected: string | null
          id: string
          name: string
          score: number
          stat_element: Json | null
          user_plugin_login: string | null
        }
        Insert: {
          description?: string | null
          icon_url?: string | null
          icon_url_selected?: string | null
          id?: string
          name: string
          score: number
          stat_element?: Json | null
          user_plugin_login?: string | null
        }
        Update: {
          description?: string | null
          icon_url?: string | null
          icon_url_selected?: string | null
          id?: string
          name?: string
          score?: number
          stat_element?: Json | null
          user_plugin_login?: string | null
        }
      }
      trophies: {
        Row: {
          id: string
          points: number
          score: number
          type: string
          user_plugin_login: string | null
        }
        Insert: {
          id?: string
          points?: number
          score: number
          type: string
          user_plugin_login?: string | null
        }
        Update: {
          id?: string
          points?: number
          score?: number
          type?: string
          user_plugin_login?: string | null
        }
      }
      user_plugins: {
        Row: {
          avatar_url: string | null
          certification_no: number | null
          certified_at: string | null
          created_at: string | null
          deleted_at: string | null
          description: string | null
          github_id: string
          json: Json | null
          login: string
          plugin_id: string | null
          score: number
          updated_at: string | null
          user_id: string | null
          user_name: string | null
          viewCount: number | null
        }
        Insert: {
          avatar_url?: string | null
          certification_no?: number | null
          certified_at?: string | null
          created_at?: string | null
          deleted_at?: string | null
          description?: string | null
          github_id: string
          json?: Json | null
          login: string
          plugin_id?: string | null
          score?: number
          updated_at?: string | null
          user_id?: string | null
          user_name?: string | null
          viewCount?: number | null
        }
        Update: {
          avatar_url?: string | null
          certification_no?: number | null
          certified_at?: string | null
          created_at?: string | null
          deleted_at?: string | null
          description?: string | null
          github_id?: string
          json?: Json | null
          login?: string
          plugin_id?: string | null
          score?: number
          updated_at?: string | null
          user_id?: string | null
          user_name?: string | null
          viewCount?: number | null
        }
      }
      users: {
        Row: {
          birthday: string | null
          blog: string | null
          certified: boolean | null
          company: string | null
          created_at: string | null
          deleted_at: string | null
          description: string | null
          email: string | null
          gender: Database["public"]["Enums"]["Gender"] | null
          github_login: string | null
          github_url: string | null
          id: string
          locale: string | null
          location: string | null
          name: string | null
          phone: string | null
          twitter: string | null
          updated_at: string | null
        }
        Insert: {
          birthday?: string | null
          blog?: string | null
          certified?: boolean | null
          company?: string | null
          created_at?: string | null
          deleted_at?: string | null
          description?: string | null
          email?: string | null
          gender?: Database["public"]["Enums"]["Gender"] | null
          github_login?: string | null
          github_url?: string | null
          id?: string
          locale?: string | null
          location?: string | null
          name?: string | null
          phone?: string | null
          twitter?: string | null
          updated_at?: string | null
        }
        Update: {
          birthday?: string | null
          blog?: string | null
          certified?: boolean | null
          company?: string | null
          created_at?: string | null
          deleted_at?: string | null
          description?: string | null
          email?: string | null
          gender?: Database["public"]["Enums"]["Gender"] | null
          github_login?: string | null
          github_url?: string | null
          id?: string
          locale?: string | null
          location?: string | null
          name?: string | null
          phone?: string | null
          twitter?: string | null
          updated_at?: string | null
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
