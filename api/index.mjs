/**
 * The site, as a Vercel serverless function.
 *
 * `vercel.json` rewrites every request that is not a file on disk to here, and
 * this hands it to the Express app built from `src/server.ts` — the same one
 * `npm run serve` runs locally. Nothing about the site is Vercel-specific;
 * this file is only the adapter between the two.
 */
export { reqHandler as default } from '../dist/lean-solutions/server/server.mjs';
