import Marquee from "react-fast-marquee";
import {
  DiReact,
  DiNodejsSmall,
  DiCss3,
  DiHtml5,
  DiJsBadge,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiVercel,
  SiTypescript,
  SiSupabase,
  SiJamstack,
  SiPolygon,
} from "react-icons/si";
import { FaFigma, FaSpotify } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

const icons = [
  <DiReact size={25} color='#61DAFB' />,
  <SiNextdotjs size={25} />,
  <SiVercel size={25} />,
  <SiJamstack size={25} color='#FF4154' />,
  <span className='text-2xl'>🧸</span>,
  <SiTypescript size={25} color='#3178C6' />,
  <DiNodejsSmall size={25} color='#339933' />,
  <DiCss3 size={25} color='#1572B6' />,
  <DiHtml5 size={25} color='#E34F26' />,
  <DiJsBadge size={25} color='#F7DF1E' />,
  <DiMongodb size={25} color='#47A248' />,
  <DiPython size={25} color='#3776AB' />,
  <BiLogoPostgresql size={25} color='#4169E1' />,
  <DiGit size={25} color='#F05032' />,
  <SiPolygon size={25} color='#8247E5' />,
  <SiSupabase size={25} color='#3FCF8E' />,
  <FaFigma size={25} />,
  <FaSpotify size={25} color='#1DB954' />,
];

const TechScroller = () => {
  return (
    <div className='w-full pt-3'>
      <Marquee pauseOnHover>
        <div className='flex items-center gap-3'>
          {icons.map((icon, index) => (
            <div key={index} className='flex items-center justify-center h-16 w-16'>
              {icon}
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default TechScroller;
