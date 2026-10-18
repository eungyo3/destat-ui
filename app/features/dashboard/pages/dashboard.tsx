import { supabase } from "~/postgres/supaclient";

export async function loader() {
  const { data } = await supabase().from("destat-test").select("*");
  
}

export default function Dashboard() {
  return <div>Hello destat world</div>;
}