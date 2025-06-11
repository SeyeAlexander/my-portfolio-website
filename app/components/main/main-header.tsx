import NavLink from "@/components/main/nav-link";
import { Github, Linkedin, Twitter, InstagramIcon, Codepen, ExternalLink } from "lucide-react";

type MainHeaderProps = {
  activeSection: string;
  isMounted: boolean;
};

const MainHeader = ({ activeSection, isMounted }: MainHeaderProps) => {
  return (
    <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:pt-24 lg:pb-20'>
      <div
        className={`transition-all duration-700 ease-in-out ${
          isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div>
          <h1 className='text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-200 sm:text-5xl'>
            <a href='/'>Alexander Ojubanire</a>
          </h1>
          <h2 className='mt-3 text-lg font-medium tracking-tight text-slate-900 dark:text-slate-200 sm:text-xl'>
            Software Engineer
          </h2>
        </div>
        <p className='mt-4 max-w-xs leading-normal text-[15px] text-slate-700 dark:text-slate-400'>
          Experienced Software Engineer focused on building high-impact products and tools for a
          global user base.
        </p>

        <nav className='nav hidden gap-6 lg:block' aria-label='In-page jump links'>
          <ul className='mt-16 font-medium w-max'>
            <li>
              <NavLink href='#about' isActive={activeSection === "about"}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink href='#experience' isActive={activeSection === "experience"}>
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink href='#projects' isActive={activeSection === "projects"}>
                Projects
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <ul className='ml-1 mt-8 flex items-center' aria-label='Social media'>
        <li className='mr-5 shrink-0'>
          <a
            href='https://github.com/SeyeAlexander'
            target='_blank'
            rel='noreferrer noopener'
            className='block text-slate-600 dark:text-slate-400  hover:text-slate-900 dark:hover:text-slate-200'
          >
            <span className='sr-only'>GitHub</span>
            <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path
                fill='currentColor'
                d='M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2'
              />
            </svg>
          </a>
        </li>
        <li className='mr-5 shrink-0'>
          <a
            href='https://www.linkedin.com/in/alexander-ojubanire-438284241/'
            target='_blank'
            rel='noreferrer noopener'
            className='block text-slate-600 dark:text-slate-400  hover:text-slate-900 dark:hover:text-slate-200'
          >
            <span className='sr-only'>LinkedIn</span>
            <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <g fill='none' fillRule='evenodd'>
                <path d='m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z' />
                <path
                  fill='currentColor'
                  d='M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zM8 10a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-5a1 1 0 0 0-1-1m3-1a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-3.66c.305-.344.82-.748 1.393-.993c.333-.142.834-.2 1.182-.09a.55.55 0 0 1 .293.188c.052.07.132.226.132.555v4a1 1 0 0 0 2 0v-4c0-.67-.17-1.266-.524-1.744a2.54 2.54 0 0 0-1.301-.907c-.902-.283-1.901-.126-2.568.16a6 6 0 0 0-.623.312A1 1 0 0 0 11 9M8 7a1 1 0 1 0 0 2a1 1 0 0 0 0-2'
                />
              </g>
            </svg>
          </a>
        </li>
        <li className='mr-5 shrink-0'>
          <a
            href='https://x.com/seyeAlexander'
            target='_blank'
            rel='noreferrer noopener'
            className='block text-slate-600 dark:text-slate-400  hover:text-slate-900 dark:hover:text-slate-200'
          >
            <span className='sr-only'>X</span>
            <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path
                fill='currentColor'
                d='m17.687 3.063l-4.996 5.711l-4.32-5.711H2.112l7.477 9.776l-7.086 8.099h3.034l5.469-6.25l4.78 6.25h6.102l-7.794-10.304l6.625-7.571zm-1.064 16.06L5.654 4.782h1.803l10.846 14.34z'
              />
            </svg>
          </a>
        </li>
        <li className='mr-5 shrink-0'>
          <a
            href='mailto:ojubanirealex@gmail.com'
            className='block text-slate-600 dark:text-slate-400  hover:text-slate-900 dark:hover:text-slate-200'
          >
            <span className='sr-only'>Email</span>
            <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <g fill='currentColor'>
                <path d='M22 7.535V17a3 3 0 0 1-2.824 2.995L19 20H5a3 3 0 0 1-2.995-2.824L2 17V7.535l9.445 6.297l.116.066a1 1 0 0 0 .878 0l.116-.066z' />
                <path d='M19 4c1.08 0 2.027.57 2.555 1.427L12 11.797l-9.555-6.37a3 3 0 0 1 2.354-1.42L5 4z' />
              </g>
            </svg>
          </a>
        </li>
      </ul>
    </header>
  );
};

export default MainHeader;
