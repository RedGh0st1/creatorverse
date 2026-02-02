import { createClient } from "@supabase/supabase-js";

const URL = "https://anamvmglakgokcdqcgtn.supabase.co";
const API_KEY = "sb_publishable_mWCJcKAq_9VN3ystau5Fnw_wyKRGxEt";

export const supabase = createClient(URL, API_KEY);
