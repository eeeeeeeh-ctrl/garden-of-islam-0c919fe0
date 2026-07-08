import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-parchment px-4">
      <div className="max-w-md text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-accent">404</p>
        <h1 className="mt-4 font-display text-5xl text-primary">Page not found</h1>
        <p className="mt-3 text-muted-foreground">
          This page has wandered beyond the garden walls.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-forest"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-parchment px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-primary">Something disturbed the stillness</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Please try again or return to the entrance of the garden.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-forest"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "The Garden of Islam — A Digital Sanctuary of Islamic Knowledge" },
      {
        name: "description",
        content:
          "A peaceful digital library of Islamic books, manuscripts, research and discussions. Grow in knowledge through the timeless works of our scholars.",
      },
      { property: "og:title", content: "The Garden of Islam — A Digital Sanctuary of Islamic Knowledge" },
      {
        property: "og:description",
        content:
          "A peaceful digital library of Islamic books, manuscripts, research and discussions. Grow in knowledge through the timeless works of our scholars.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "The Garden of Islam" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "The Garden of Islam — A Digital Sanctuary of Islamic Knowledge" },
      { name: "description", content: "A peaceful digital library of Islamic books, manuscripts, research and discussions. Grow in knowledge through the timeless works of our scholars." },
      { property: "og:description", content: "A peaceful digital library of Islamic books, manuscripts, research and discussions. Grow in knowledge through the timeless works of our scholars." },
      { name: "twitter:description", content: "A peaceful digital library of Islamic books, manuscripts, research and discussions. Grow in knowledge through the timeless works of our scholars." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9dba2c8a-58b2-420b-9841-0b9722bd946c/id-preview-9a3a5346--193234ad-1c0d-4e0d-8dc1-f4cbd95e184b.lovable.app-1783441070789.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9dba2c8a-58b2-420b-9841-0b9722bd946c/id-preview-9a3a5346--193234ad-1c0d-4e0d-8dc1-f4cbd95e184b.lovable.app-1783441070789.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Jost:wght@300;400;500;600&family=Amiri:ital,wght@0,400;0,700;1,400&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-background">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
