import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-canvas px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl text-ink">404</h1>
        <h2 className="mt-4 font-serif text-2xl text-ink">Page not found</h2>
        <p className="mt-2 text-sm text-ink-muted">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-canvas transition-transform hover:scale-105"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Neetika Chavan · Management Associate" },
      {
        name: "description",
        content:
          "Neetika Chavan, Management Associate based in Mumbai. I turn manual finance and operations processes into automation people actually trust.",
      },
      { name: "author", content: "Neetika Chavan" },
      { property: "og:title", content: "Neetika Chavan · Management Associate" },
      {
        property: "og:description",
        content:
          "Mapping operational chaos into calm, scalable systems. Project management, automation, and process improvement.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Neetika Chavan · Management Associate" },
      { name: "description", content: "A dynamic personal portfolio showcasing a management associate's resume, skills, and project experience." },
      { property: "og:description", content: "A dynamic personal portfolio showcasing a management associate's resume, skills, and project experience." },
      { name: "twitter:description", content: "A dynamic personal portfolio showcasing a management associate's resume, skills, and project experience." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ae7d4911-aa61-4f47-ab42-3e1fe6c8ad4f/id-preview-da7172d0--03bb56cd-b73c-4f36-a38c-859b49869169.lovable.app-1776781331231.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ae7d4911-aa61-4f47-ab42-3e1fe6c8ad4f/id-preview-da7172d0--03bb56cd-b73c-4f36-a38c-859b49869169.lovable.app-1776781331231.png" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
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
  return <Outlet />;
}
