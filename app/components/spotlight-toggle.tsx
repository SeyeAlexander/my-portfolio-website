import { Zap, ZapOff } from "lucide-react";

type SpotlightToggleProps = {
  isActive: boolean;
  onClick: () => void;
};

export function SpotlightToggle({ isActive, onClick }: SpotlightToggleProps) {
  return (
    <button
      onClick={onClick}
      className='p-1 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring'
      aria-label='Toggle spotlight'
    >
      <div className='relative h-[1.2rem] w-[1.2rem]'>
        <Zap
          className={`absolute inset-0 h-full w-full transform text-slate-900 transition-all duration-300 ease-in-out dark:text-slate-100 ${
            isActive ? "rotate-0 scale-100" : "-rotate-90 scale-0"
          }`}
        />
        <ZapOff
          className={`absolute inset-0 h-full w-full transform text-slate-900 transition-all duration-300 ease-in-out dark:text-slate-100 ${
            !isActive ? "rotate-0 scale-100" : "rotate-90 scale-0"
          }`}
        />
      </div>
      <span className='sr-only'>Toggle spotlight</span>
    </button>
  );
}
