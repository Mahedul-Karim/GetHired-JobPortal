import { createClient } from "@supabase/supabase-js";

let supabase = null;

const createSupabase = () => {
  if (!supabase) {
    supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
  }

  return supabase;
};

export { createSupabase };
