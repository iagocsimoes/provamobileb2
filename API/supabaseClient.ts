import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gaxospsmfcnfgusefxox.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdheG9zcHNtZmNuZmd1c2VmeG94Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE5MzMwMjgsImV4cCI6MjA0NzUwOTAyOH0.JRTB9W92HXQY1kxpckhxqifjv9x4hHMLDEsGGOqxjwc";

export const supabase = createClient(supabaseUrl, supabaseKey);
