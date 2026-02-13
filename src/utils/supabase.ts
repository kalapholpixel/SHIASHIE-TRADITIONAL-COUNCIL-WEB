
import { createClient } from "@supabase/supabase-js";

let supabaseInstance: ReturnType<typeof createClient> | null = null;

function initSupabaseClient() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error(
            "Supabase credentials are missing. Please ensure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set."
        );
    }

    return createClient(supabaseUrl, supabaseAnonKey);
}

export function getSupabaseClient() {
    if (!supabaseInstance) {
        supabaseInstance = initSupabaseClient();
    }
    return supabaseInstance;
}

// Lazy singleton export for backward compatibility
export const supabase = new Proxy({}, {
    get: (_target, prop) => {
        const client = getSupabaseClient();
        const value = (client as any)[prop];
        return typeof value === 'function' ? value.bind(client) : value;
    }
}) as ReturnType<typeof createClient>;
