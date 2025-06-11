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
        suppressHydrationWarning: true,
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

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head suppressHydrationWarning>
        <HeadContent />
      </head>
      <body
        className='bg-slate-900 leading-relaxed text-slate-400  antialiased selection:bg-teal-300 selection:text-teal-900'
        suppressHydrationWarning
      >
        {children}
        <Scripts />
      </body>
    </html>
  );
}
