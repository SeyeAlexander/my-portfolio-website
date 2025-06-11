import { createFileRoute, Link } from "@tanstack/react-router";
import { archiveProjects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { SpotlightToggle } from "@/components/spotlight-toggle";
import { useTheme } from "@/components/theme-provider";

export const Route = createFileRoute("/archive")({
  component: ArchivePage,
});

function ArchivePage() {
  const { theme } = useTheme();
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [spotlightActive, setSpotlightActive] = useState(true);

  useEffect(() => {
    if (theme === "light") {
      setSpotlightActive(false);
    }
  }, [theme]);

  // Set isMounted to true after component mounts
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (!isMounted || !spotlightActive) {
      if (spotlightRef.current) {
        spotlightRef.current.style.background = "none";
      }
      return;
    }

    const handleMouseMove = (event: MouseEvent) => {
      if (spotlightRef.current) {
        const { clientX, clientY } = event;
        spotlightRef.current.style.background = `radial-gradient(600px at ${clientX}px ${
          clientY + window.scrollY
        }px, rgba(29, 78, 216, 0.15), transparent 80%)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMounted, spotlightActive]);

  return (
    <div className='relative font-sans text-slate-300'>
      <div
        ref={spotlightRef}
        className={`pointer-events-none hidden md:block fixed inset-0 z-30 transition duration-300 md:absolute ${
          spotlightActive ? "" : "hidden"
        }`}
        style={isMounted ? {} : { background: "none" }}
      ></div>
      <div
        className={`mx-auto relative min-h-screen w-full md:max-w-(--breakpoint-2xl) px-10 py-12 font-sans md:px-12 md:py-20 xl:px-32 lg:pt-24 lg:pb-20 transition-all duration-500 ease-in-out ${
          isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className='absolute top-6 right-6 z-50 flex flex-col items-center space-y-2'>
          <ModeToggle />
        </div>
        <header className='mb-16'>
          <Link
            to='/'
            className='group mb-2 inline-flex items-center text-sm font-semibold leading-tight text-indigo-600 dark:text-indigo-400'
          >
            <ArrowLeft className='mr-1 h-4 w-4 transition-transform group-hover:-translate-x-1' />
            Alexander · About · Experience
          </Link>
          <h1 className='text-4xl pt-4 font-bold tracking-tight text-slate-900 dark:text-slate-200 sm:text-5xl'>
            Projects Archive
          </h1>
        </header>
        <div className='w-full'>
          <div className='sticky top-6 z-10 hidden md:grid grid-cols-12 gap-4 p-4 text-sm font-semibold text-slate-900 dark:text-slate-400 border-b border-slate-900 dark:border-slate-800  dark:bg-slate-900/75 backdrop-blur-sm'>
            <div className='col-span-1'>Year</div>
            <div className='col-span-3'>Project</div>
            <div className='col-span-2'>Made at</div>
            <div className='col-span-3'>Built with</div>
            <div className='col-span-3 text-right'>Link</div>
          </div>
          <div>
            {archiveProjects.map((project) => (
              <div
                key={project.project}
                className='grid grid-cols-12 gap-4 items-center px-4 py-6 dark:border-b border-slate-400 dark:border-slate-800 transition-colors hover:bg-[#D1C5A7]/30 hover:backdrop-blur-sm dark:hover:bg-slate-800/50'
              >
                <div className='col-span-12 md:col-span-1 text-slate-600 dark:text-slate-400 text-sm'>
                  {project.year}
                </div>
                <div className='col-span-12 md:col-span-3 font-semibold text-slate-900 dark:text-slate-200'>
                  {project.project}
                </div>
                <div className='col-span-12 md:col-span-2 text-slate-600 dark:text-slate-400 text-sm'>
                  {project.madeAt}
                </div>
                <div className='col-span-12 md:col-span-3 flex flex-wrap gap-1.5'>
                  {project.builtWith.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
                <div className='col-span-12 md:col-span-3 text-sm text-right'>
                  {project.link && project.link !== "#" ? (
                    <a
                      href={project.link}
                      target='_blank'
                      rel='noreferrer noopener'
                      className='inline-flex items-center text-slate-600 dark:text-slate-400 group/link hover:text-indigo-700 dark:hover:text-indigo-400'
                    >
                      <span>{project.link.replace(/^(https?:\/\/)/i, "")}</span>
                      <ArrowUpRight className='inline-block h-4 w-4 shrink-0 ease-in-out duration-200 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px' />
                    </a>
                  ) : (
                    <span className='text-slate-400'>N/A</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {theme === "dark" && (
        <div className='fixed bottom-6 right-6 z-50'>
          <SpotlightToggle
            isActive={spotlightActive}
            onClick={() => setSpotlightActive(!spotlightActive)}
          />
        </div>
      )}
    </div>
  );
}
