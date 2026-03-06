
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://moidwfwrspdytenmzeku.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vaWR3Zndyc3BkeXRlbm16ZWt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3NzkwMTAsImV4cCI6MjA4ODM1NTAxMH0.p0LyxPLi9cVv-rtm0SFUQ7Jxbuy5TZRdG02XMc61KL8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
