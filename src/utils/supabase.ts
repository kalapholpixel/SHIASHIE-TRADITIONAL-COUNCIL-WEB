
import { createClient } from "@supabase/supabase-js";

let supabaseInstance: any;

/**
 * Initialize Supabase client
 * Only initialize if environment variables are available
 */
function initSupabaseClient(): any | null {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    // During build time, these variables might not be available
    if (!supabaseUrl || !supabaseAnonKey) {
        console.warn(
            "⚠️ Supabase credentials are not available. This is expected during build time."
        );
        return null;
    }

    return createClient(supabaseUrl, supabaseAnonKey);
}

/**
 * Get Supabase client instance
 * Returns null if credentials are not available (e.g., during build)
 */
export function getSupabaseClient() {
    if (typeof supabaseInstance === "undefined") {
        supabaseInstance = initSupabaseClient();
    }
    return supabaseInstance;
}

/**
 * Lazy singleton export for backward compatibility
 * Safe for runtime use only
 */
export const supabase = {
    get client() {
        const instance = getSupabaseClient();
        if (!instance) {
            throw new Error(
                "Supabase client not initialized. Ensure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set."
            );
        }
        return instance;
    }
};
