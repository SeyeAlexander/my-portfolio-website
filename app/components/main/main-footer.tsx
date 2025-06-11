const MainFooter = () => {
  return (
    <footer className='max-w-md pb-5 text-sm hover:text-slate-900 dark:hover:text-slate-200 transition-colors duration-200 ease-in-out text-slate-500 dark:text-slate-500 sm:pb-0'>
      <p>
        Coded in 8 fun hours in{" "}
        <a
          href='https://cursor.sh/'
          className='font-medium text-indigo-500 dark:text-slate-400 hover:text-indigo-700 dark:hover:text-indigo-300 focus-visible:text-indigo-300'
          target='_blank'
          rel='noreferrer noopener'
          aria-label='Cursor (opens in a new tab)'
        >
          Cursor
        </a>{" "}
        as my intro to the TanStack Start framework. Inspired by designs on{" "}
        <a
          href='https://x.com'
          className='font-medium text-indigo-500 dark:text-slate-400 hover:text-indigo-700 dark:hover:text-indigo-300 focus-visible:text-indigo-300'
          target='_blank'
          rel='noreferrer noopener'
          aria-label='X (opens in a new tab)'
        >
          X
        </a>
        , built with{" "}
        <a
          href='https://tanstack.com/start/latest'
          className='font-medium text-indigo-500 dark:text-slate-400 hover:text-indigo-700 dark:hover:text-indigo-300 focus-visible:text-indigo-300'
          target='_blank'
          rel='noreferrer noopener'
          aria-label='TanStack Start (opens in a new tab)'
        >
          TanStack Start
        </a>
        ,{" "}
        <a
          href='https://ui.shadcn.com/'
          className='font-medium text-indigo-500 dark:text-slate-400 hover:text-indigo-700 dark:hover:text-indigo-300 focus-visible:text-indigo-300'
          target='_blank'
          rel='noreferrer noopener'
          aria-label='shadcn/ui (opens in a new tab)'
        >
          shadcn/ui
        </a>
        , and{" "}
        <a
          href='https://tailwindcss.com/'
          className='font-medium text-indigo-500 dark:text-slate-400 hover:text-indigo-700 dark:hover:text-indigo-300 focus-visible:text-indigo-300'
          target='_blank'
          rel='noreferrer noopener'
          aria-label='Tailwind CSS (opens in a new tab)'
        >
          Tailwind CSS
        </a>
        , deployed with{" "}
        <a
          href='https://vercel.com/'
          className='font-medium text-indigo-500 dark:text-slate-400 hover:text-indigo-700 dark:hover:text-indigo-300 focus-visible:text-indigo-300'
          target='_blank'
          rel='noreferrer noopener'
          aria-label='Vercel (opens in a new tab)'
        >
          Vercel
        </a>
        . All text is set in the Inter typeface.
      </p>
    </footer>
  );
};

export default MainFooter;
