// 2026 李얠븘媛???щ쫫?ъ감 鍮꾩슜 ?뺤궛 - Supabase ?ㅼ젙 ?뚯씪
// Supabase ?꾨줈?앺듃??Settings -> API 硫붾돱?먯꽌 Project URL怨?API Key (anon public)瑜?蹂듭궗?섏뿬 ?낅젰??二쇱꽭??

const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';

let supabaseClient = null;

if (typeof supabase !== 'undefined' && SUPABASE_URL !== 'YOUR_SUPABASE_URL' && SUPABASE_ANON_KEY !== 'YOUR_SUPABASE_ANON_KEY') {
  supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}
