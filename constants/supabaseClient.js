import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

export const supabase = createClient('https://dmjiqdaqjacggaxjoiuy.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNTA1OTc3MiwiZXhwIjoxOTMwNjM1NzcyfQ.Y03hx3Qom-w5PaOj51yfD1VffKpePbWzE8j5HCXLi1Y');
