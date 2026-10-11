# pieroenriquez.com

Personal site. Content lives in `src/content.js`; the CV PDF is in `public/`.

Hosted on Cloudflare Workers as static assets. Every push to `master` builds and deploys.

```
npm install
npm run dev      # dev server with hot reload
npm test         # vitest
npm run build    # production build into dist/
npm run deploy   # manual deploy with wrangler (normally not needed)
```
