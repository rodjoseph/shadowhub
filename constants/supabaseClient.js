import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

export const supabase = createClient('https://xhbuwefprqgwmxelejoe.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNzM5OTY1NiwiZXhwIjoxOTQyOTc1NjU2fQ.HKDNF2FEPUOZw_3gSQl49iLomfv2PzYcQkh-uctaftA');
