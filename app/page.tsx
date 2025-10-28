import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-8 sm:px-16 bg-white dark:bg-black">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={24}
            priority
          />
          <h1 className="text-2xl font-semibold text-black dark:text-zinc-50">
            ShopSM API
          </h1>
        </div>

        {/* Introduction */}
        <section className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h2 className="text-3xl font-semibold leading-tight text-black dark:text-zinc-50">
            🛍️ Welcome to the ShopSM API
          </h2>
          <p className="max-w-lg text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            This API serves product data scraped from <b>ShopSM.com</b> for
            development and testing purposes. You can search, paginate, and
            filter through product information locally using the built-in
            endpoints.
          </p>
        </section>

        {/* Endpoints List */}
        <section className="mt-8 flex flex-col gap-4 text-base font-medium text-zinc-800 dark:text-zinc-200">
          <h3 className="text-xl font-semibold mb-2">📡 Available Endpoints</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <code className="rounded bg-zinc-100 dark:bg-zinc-800 px-2 py-1">
                GET /api/get?page=1
              </code>{" "}
              — Paginated product results.
            </li>
            <li>
              <code className="rounded bg-zinc-100 dark:bg-zinc-800 px-2 py-1">
                GET /api/searches?q=coffee
              </code>{" "}
              — Realtime search suggestions.
            </li>
            <li>
              <code className="rounded bg-zinc-100 dark:bg-zinc-800 px-2 py-1">
                GET /api/filter?min=100&max=500
              </code>{" "}
              — Filter products by price range.
            </li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="flex flex-col gap-4 text-sm text-zinc-500 dark:text-zinc-400 mt-12 text-center sm:text-left">
          <p>
            Built with ❤️ using{" "}
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-700 dark:hover:text-zinc-200"
            >
              Next.js
            </a>{" "}
            and <b>App Router</b>.
          </p>
          <p>Deployed easily on Vercel.</p>
        </footer>
      </main>
    </div>
  );
}
