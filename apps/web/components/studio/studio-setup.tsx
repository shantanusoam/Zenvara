export function StudioSetup() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#101112] px-6 py-12 text-white">
      <div className="w-full max-w-xl space-y-6 rounded-2xl border border-white/10 bg-[#151718] p-8 shadow-2xl">
        <div className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
            Zenvara CMS
          </p>
          <h1 className="text-2xl font-semibold">Admin studio is not configured yet</h1>
          <p className="text-sm leading-6 text-white/70">
            Add Sanity environment variables, allow your site URL in Sanity CORS, then seed
            the initial content so the frontend reads from the CMS.
          </p>
        </div>

        <div className="space-y-3 rounded-xl bg-black/30 p-4 font-mono text-xs leading-6 text-white/80">
          <p>NEXT_PUBLIC_SANITY_PROJECT_ID=djjvnb4h</p>
          <p>NEXT_PUBLIC_SANITY_DATASET=production</p>
          <p>NEXT_PUBLIC_SANITY_API_VERSION=2026-05-09</p>
        </div>

        <ol className="list-decimal space-y-2 pl-5 text-sm leading-6 text-white/75">
          <li>Copy `apps/web/.env.example` to `apps/web/.env.local` and fill in the values above.</li>
          <li>Run `pnpm --filter web cms:cors` to allow localhost and production in Sanity.</li>
          <li>Run `pnpm --filter web cms:seed` after `sanity login` to publish starter content.</li>
          <li>Reload `/studio` and sign in with your Sanity account.</li>
        </ol>
      </div>
    </div>
  )
}
