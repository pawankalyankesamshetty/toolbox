# ToolBox — Production Online Tools Platform

A production-ready Next.js 16.3 App Router application designed for Vercel deployment, organic search traffic, browser-first processing, and future Google AdSense monetization.

## Included tools
- Image Compressor
- Image Resizer
- JPG to PNG
- PNG to JPG
- PDF Compressor / Optimizer
- QR Code Generator
- Word Counter
- JSON Formatter

## Production stack
- Next.js 16.3 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Vercel Analytics + Speed Insights
- pdf-lib / qrcode
- Browser-side processing where practical
- Dynamic sitemap and robots.txt
- WebApplication structured data
- Conditional AdSense integration
- `ads.txt` endpoint

## Local setup
1. Use Node.js 20.9+.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local`.
4. Set `NEXT_PUBLIC_SITE_URL` to your real HTTPS domain when available.
5. Run `npm run dev`.
6. Open `http://localhost:3000`.

## Deployment configuration
The application code is complete. Before the first public deployment, only deployment/account values need to be supplied:

- `NEXT_PUBLIC_SITE_URL` — final HTTPS domain.
- `NEXT_PUBLIC_CONTACT_EMAIL` — real public support email.
- `NEXT_PUBLIC_SEARCH_CONSOLE_VERIFICATION` — Google Search Console verification token, when used.
- `NEXT_PUBLIC_ADSENSE_CLIENT` — approved AdSense publisher/client ID.
- `NEXT_PUBLIC_ADSENSE_HOME_SLOT` — approved home-page ad slot.
- `NEXT_PUBLIC_ADSENSE_TOOL_SLOT` — approved tool-page ad slot.

If AdSense variables are empty, ad components do not render. This keeps the site clean while AdSense approval/configuration is pending.

## Vercel
Vercel detects Next.js automatically. Import the GitHub repository, add the environment variables in Vercel Project Settings, and deploy.

## Search / AdSense launch checklist
- Use the final HTTPS domain.
- Verify the site in Google Search Console.
- Submit `/sitemap.xml`.
- Add the exact AdSense publisher line to `/ads.txt` through the configured publisher ID.
- Configure a Google-certified consent-management solution when required for the users/jurisdictions and advertising setup.
- Complete AdSense site review/approval before enabling production ads.
- Confirm contact, privacy and terms information is accurate for the site owner.

## PDF note
The PDF tool performs browser-side optimization/re-save and metadata cleanup. It does not guarantee a smaller file for every PDF; the UI reports the actual before/after size.
