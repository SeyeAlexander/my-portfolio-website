// app/routes/__root.tsx
import type { ReactNode } from "react";
import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "@/styles/app.css?url";
import { ThemeProvider } from "@/components/theme-provider";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
        suppressHydrationWarning: true,
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        suppressHydrationWarning: true,
      },
      {
        title: "My Portfolio Website",
        suppressHydrationWarning: true,
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  component: RootComponent,
  errorComponent: ({ error }) => {
    console.error(error);
    return (
      <RootDocument>
        <div className='p-4 text-red-500'>
          <h1>Error</h1>
          <p>{error.message}</p>
        </div>
      </RootDocument>
    );
  },
  notFoundComponent: () => {
    return (
      <RootDocument>
        <div className='flex min-h-screen flex-col items-center justify-center'>
          <h1 className='text-4xl font-bold text-slate-200'>Page Not Found</h1>
          <p className='mt-4 text-slate-400'>The page you're looking for doesn't exist.</p>
        </div>
      </RootDocument>
    );
  },
});

/**
 * Renders the root layout of the application, wrapping nested routes in the main HTML document structure.
 *
 * @returns The root component containing the document layout and an outlet for child routes.
 */
function RootComponent() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <RootDocument>
        <Outlet />
      </RootDocument>
    </ThemeProvider>
  );
}

/**
 * Renders the complete HTML document structure for the application, including metadata, scripts, and nested route content.
 *
 * @param children - The content to be rendered inside the document's body, typically nested routes.
 */
function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  const blockingThemeScript = `
    (function() {
      try {
        const theme = localStorage.getItem('vite-ui-theme') || 'dark';
        const root = document.documentElement;
        if (theme === 'system') {
          const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
          root.classList.add(systemTheme);
        } else {
          root.classList.add(theme);
        }
      } catch (e) {
        console.error("Error in theme script", e);
      }
    })();
  `;

  return (
    <html lang='en' className='dark' suppressHydrationWarning>
      <head suppressHydrationWarning>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: blockingThemeScript }} />
      </head>
      <body
        className='leading-relaxed bg-[#E7DDC6] dark:bg-slate-900  text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900'
        suppressHydrationWarning
      >
        {children}
        <Scripts />
      </body>
    </html>
  );
}
