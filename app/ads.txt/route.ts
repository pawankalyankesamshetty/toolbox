export const dynamic='force-static';
export function GET(){const client=process.env.NEXT_PUBLIC_ADSENSE_CLIENT;return new Response(client?`google.com, ${client.replace('ca-pub-','')}, DIRECT, f08c47fec0942fa0\n`:'',{headers:{'content-type':'text/plain; charset=utf-8'}})}
