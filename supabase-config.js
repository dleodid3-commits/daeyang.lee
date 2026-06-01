// 2026 찾아가는 여름포차 비용 정산 - Supabase 설정 파일
// Supabase 프로젝트의 Settings -> API 메뉴에서 Project URL과 API Key (anon public)를 복사하여 입력해 주세요.

const SUPABASE_URL = 'https://iwsukptncchchszwftrt.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_mhfo5k0UIMehDDcPiaUQOA_3MUusJwW';

let supabaseClient = null;

if (typeof supabase !== 'undefined' && SUPABASE_URL !== 'YOUR_SUPABASE_URL' && SUPABASE_ANON_KEY !== 'YOUR_SUPABASE_ANON_KEY') {
  supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}
