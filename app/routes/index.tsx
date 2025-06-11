import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import AboutSection from "@/components/main/about";
import ExperienceCard from "@/components/main/experience-card";
import ProjectCard from "@/components/main/project-card";
import { experiences, projects } from "@/lib/data";
import MainHeader from "@/components/main/main-header";
import MainFooter from "@/components/main/main-footer";

export const Route = createFileRoute("/")({
  component: HomePage,
});

/**
 * Renders the homepage layout with personal information, a brief description, navigation items, and a GitHub icon button.
 *
 * The component displays a two-column structure: the left column contains the name, title, description, navigation labels, and a styled button with a GitHub logo; the right column is reserved for future content.
 */
function HomePage() {
  const [activeSection, setActiveSection] = useState("about");
  const observer = useRef<IntersectionObserver | null>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Set isMounted to true after component mounts
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

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
  }, [isMounted]);

  useEffect(() => {
    if (!isMounted) return;

    const observerOptions = {
      rootMargin: "0px 0px -80% 0px",
    };
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
      observer.current?.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.current?.unobserve(section);
      });
    };
  }, [isMounted]);

  return (
    <div className='min-h-screen bg-slate-900  text-foreground leading-relaxed antialiased selection:bg-teal-300 selection:text-teal-900'>
      <div className='relative'>
        <div
          ref={spotlightRef}
          className='pointer-events-none hidden md:block  fixed inset-0 z-30 transition duration-300 md:absolute'
          style={isMounted ? {} : { background: "none" }}
        ></div>
        <div className='mx-auto min-h-screen w-full md:max-w-screen-2xl py-12 font-sans px-10 md:px-12 md:py-20 xl:px-32 lg:py-0'>
          <div className='lg:flex lg:justify-between lg:gap-4'>
            <MainHeader activeSection={activeSection} />

            <main id='content' className='pt-16 md:pt-24 lg:w-1/2 lg:pt-24 lg:pb-20'>
              <section
                id='about'
                className='mb-16 scroll-mt-16 md:mb-24 lg:mb-20 lg:scroll-mt-24'
                aria-label='About me'
              >
                <AboutSection />
              </section>

              <section
                id='experience'
                className='mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-20'
                aria-label='Work experience'
              >
                <div className='mb-8'>
                  <a
                    href='https://drive.google.com/file/d/1fem6meDrWDGHMQ0nuL5MqodLnUWQ_f9L/view?usp=drive_link'
                    target='_blank'
                    rel='noreferrer noopener'
                    className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-indigo-400 focus-visible:text-indigo-300 group/link text-base'
                  >
                    <span>
                      View Résumé
                      <ArrowUpRight className='inline-block h-4 w-4 shrink-0 ease-in-out duration-200 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px' />
                    </span>
                  </a>
                </div>

                <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
                  <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>
                    Experience
                  </h2>
                </div>

                <div>
                  <ol className='group/list'>
                    {experiences.map((exp) => (
                      <li key={exp.title} className='mb-12'>
                        <ExperienceCard {...exp} />
                      </li>
                    ))}
                  </ol>
                </div>
              </section>

              <section
                id='projects'
                className='mb-16 scroll-mt-16 md:mb-24 lg:mb-20 lg:scroll-mt-20'
                aria-label='Selected projects'
              >
                <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
                  <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>
                    Projects
                  </h2>
                </div>
                <div>
                  <ul className='group/list'>
                    {projects.map((project) => (
                      <li key={project.title} className='mb-12'>
                        <ProjectCard {...project} />
                      </li>
                    ))}
                  </ul>

                  <div className='mt-12'>
                    <a
                      href='/archive'
                      className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-indigo-400 focus-visible:text-indigo-300 group/link text-base'
                    >
                      <span>
                        View Projects Archive
                        <ArrowUpRight className='inline-block h-4 w-4 shrink-0 ease-in-out duration-200 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px' />
                      </span>
                    </a>
                  </div>
                </div>
              </section>
              <MainFooter />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
