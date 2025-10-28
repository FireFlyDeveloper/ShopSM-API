import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-8 sm:px-16 bg-white dark:bg-black">
        {/* Header */}
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
            filter product information locally using the built-in endpoints.
          </p>

          <a
            href="https://github.com/FireFlyDeveloper/ShopSM-API.git"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900 px-5 py-2 text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 007.85 10.94c.57.1.78-.25.78-.55v-1.94c-3.19.69-3.87-1.38-3.87-1.38-.52-1.31-1.27-1.66-1.27-1.66-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.77 2.7 1.26 3.36.97.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 015.73 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.44-2.69 5.42-5.26 5.7.41.35.78 1.04.78 2.1v3.11c0 .3.21.66.79.55A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
            </svg>
            View on GitHub
          </a>
        </section>

        {/* Endpoints */}
        <section className="mt-10 flex flex-col gap-4 text-base font-medium text-zinc-800 dark:text-zinc-200">
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
        <footer className="flex flex-col gap-3 text-sm text-zinc-500 dark:text-zinc-400 mt-12 text-center sm:text-left">
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
        </footer>
      </main>
    </div>
  );
}
