import { createClient } from "@supabase/supabase-js";

let supabaseInstance: ReturnType<typeof createClient> | null = null;

/**
 * Initialize Supabase client
 * Requires NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local (or build env)
 */
function initSupabaseClient() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

    if (!supabaseUrl || !supabaseAnonKey) {
        if (typeof window !== "undefined") {
            console.warn(
                "Supabase not configured: Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local"
            );
        }
        return null;
    }

    if (!supabaseUrl.startsWith("https://")) {
        console.warn("NEXT_PUBLIC_SUPABASE_URL should start with https://");
        return null;
    }

    return createClient(supabaseUrl, supabaseAnonKey);
}

/**
 * Get Supabase client instance
 * Returns null if credentials are not available (e.g., during build)
 */
export function getSupabaseClient() {
    if (supabaseInstance === undefined) {
        supabaseInstance = initSupabaseClient();
    }
    return supabaseInstance;
}

/**
 * Supabase client for use in components (e.g. supabase.from("table"))
 * Proxies to the real client; throws if not configured
 */
export const supabase = new Proxy({} as ReturnType<typeof createClient>, {
    get(_, prop) {
        const client = getSupabaseClient();
        if (!client) {
            throw new Error(
                "Supabase not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your environment."
            );
        }
        return (client as Record<string | symbol, unknown>)[prop];
    }
});
