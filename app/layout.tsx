import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import AdSense from '@/components/AdSense';
import { site } from '@/lib/site';
export const metadata: Metadata={metadataBase:new URL(site.url),title:{default:'ToolBox — Free Online Tools',template:'%s | ToolBox'},description:site.description,robots:{index:true,follow:true},openGraph:{type:'website',siteName:site.name,title:'ToolBox — Free Online Tools',description:site.description},verification:process.env.NEXT_PUBLIC_SEARCH_CONSOLE_VERIFICATION?{google:process.env.NEXT_PUBLIC_SEARCH_CONSOLE_VERIFICATION}:undefined};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/><main>{children}</main><Footer/><Analytics/><SpeedInsights/><AdSense/></body></html>}
