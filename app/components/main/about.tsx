import React from "react";
import TechScroller from "./tech-scroller";

const AboutSection = () => {
  return (
    <>
      <div className='flex flex-col gap-4 text-slate-300 text-[15px]'>
        <p>
          I’m a <span className=' text-indigo-400'>Fullstack Developer with a frontend focus,</span>{" "}
          passionate about crafting accessible, performant, and detail-oriented user interfaces. I
          love building at the intersection of thoughtful design and robust engineering — where
          beautiful UI meets resilient systems.
        </p>
        <p>
          Right now, I’m a Frontend Engineer at Neue World, where I lead development on internal
          platforms and tools that bridge creativity and code — including{" "}
          <span className=' text-indigo-400'>Flozi,</span> which connects{" "}
          <span className=' text-indigo-400'>
            {" "}
            Notion to Webflow, and Layers, a crypto-authenticated freelance platform.
          </span>{" "}
          I also build collaborative tools on the side, like a Notion-inspired editor powered by
          Supabase, Lexical, Drizzle, and OpenAI — built to push my skills and inspire others.
        </p>
        <p>
          In the past, I’ve worked across early-stage startups, remote product studios, and
          client-driven agencies, contributing to projects for organizations like ICCA Dubai and The
          Be Company UK. Across all these,{" "}
          <span className=' text-indigo-400'>
            {" "}
            I’ve shipped code that’s accessible, reliable, and built with care.
          </span>
        </p>
        <p>
          When I’m not building something new, you’ll probably find me refining a component,
          sketching a UX flow in Figma, or figuring out how to teach LLMs to think like engineers.
          Otherwise, I’m reading, listening to music, or chasing creativity in some unexpected
          place.
        </p>
      </div>
      {/* <TechScroller /> */}
    </>
  );
};

export default AboutSection;
