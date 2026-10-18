import { supabase } from "~/postgres/supaclient"
// 렌더링 전에 백엔드에서 실행

// navigation
// -Dashboard
// -Survey
//  --All surveys
//  --reate survey
// -Archive
//  --Finished surveys
// Profile
//  My surveys
//  My responses
export async function loader() {
    const {data} = await supabase().from("destat-test").select("*");
    console.log(data);
}

export default function Home() {
    return <div>Hello destat world

    </div>
}