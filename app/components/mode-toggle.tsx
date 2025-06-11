import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className='flex items-center space-x-2'>
      <button
        onClick={() => setTheme("dark")}
        className={`font-medium text-sm transition-colors ${
          isDark
            ? "text-indigo-600 dark:text-indigo-400"
            : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
        }`}
      >
        Dark
      </button>
      <span className='text-slate-400 dark:text-slate-600'>|</span>
      <button
        onClick={() => setTheme("light")}
        className={`font-medium text-sm transition-colors ${
          !isDark
            ? "text-indigo-600 dark:text-indigo-400"
            : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
        }`}
      >
        Latte
      </button>
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className='p-1 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring'
      >
        <div className='relative h-[1.2rem] w-[1.2rem]'>
          <Sun
            className={`absolute inset-0 h-full w-full transform text-slate-900 transition-transform duration-500 ease-in-out dark:text-slate-100 ${
              !isDark ? "rotate-0 scale-100" : "rotate-90 scale-0"
            }`}
          />
          <Moon
            className={`absolute inset-0 h-full w-full transform text-slate-900 transition-transform duration-500 ease-in-out dark:text-slate-100 ${
              isDark ? "rotate-0 scale-100" : "-rotate-90 scale-0"
            }`}
          />
        </div>
        <span className='sr-only'>Toggle theme</span>
      </button>
    </div>
  );
}
