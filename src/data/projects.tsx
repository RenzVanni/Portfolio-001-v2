import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { RiNotionFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";

import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { Projects_Prop } from "../types/projects_prop";

const data: Projects_Prop[] = [
  {
    id: 1,
    title: "Midnotes",
    context:
      "Midnotes is a note taking web application inspired by Notion. Fun fact about the Midnotes aside from it look like the notion ui, the database that was used to build this application is the notion api.",
    hero: "/thumbnail/todo-list-v2.png",
    linksIcon: [
      <FaGithub className="text-primary text-3xl cursor-pointer hover:scale-110" />,
      <IoLogoVercel className="text-primary text-3xl cursor-pointer hover:scale-110" />,
    ],
    link: [
      "https://github.com/RenzVanni/Todo-List-v2",
      "https://todo-list-v2-dev.vercel.app/",
    ],
    techs: [
      <FaHtml5 className="text-primary text-3xl" />,
      <FaCss3Alt className="text-primary text-3xl" />,
      <RiTailwindCssFill className="text-primary text-3xl" />,
      <TbBrandTypescript className="text-primary text-3xl" />,
      <FaReact className="text-primary text-3xl" />,
      <FaNodeJs className="text-primary text-3xl" />,
      <SiExpress className="text-primary text-3xl" />,
      <RiNotionFill className="text-primary text-3xl" />,
    ],
  },
  {
    id: 2,
    title: "Space tourism multi-page website",
    context:
      "Let's face it, if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!",
    disclaimer:
      "This project was from frontendmentor.io but the code was made by may self and not copy paste.",
    hero: "/thumbnail/space-tourism.png",
    linksIcon: [
      <FaGithub className="text-primary text-3xl cursor-pointer hover:scale-110" />,
      <IoLogoVercel className="text-primary text-3xl cursor-pointer hover:scale-110" />,
    ],
    link: [
      "https://github.com/RenzVanni/space_tourism",
      "https://space-tourism-dev.vercel.app",
    ],
    techs: [
      <FaHtml5 className="text-primary text-3xl" />,
      <FaCss3Alt className="text-primary text-3xl" />,
      <RiJavascriptLine className="text-primary text-3xl" />,
      <FaReact className="text-primary text-3xl" />,
    ],
  },
  {
    id: 3,
    title: "Comment Section",
    context:
      "Comment section is a project that put my JavaScript skills to the test, by using JSON file to pull the data.",
    disclaimer:
      "This project was from frontendmentor.io but the code was made by may self and not copy paste.",
    hero: "/thumbnail/comment-section.png",
    linksIcon: [
      <FaGithub className="text-primary text-3xl cursor-pointer hover:scale-110" />,
      <IoLogoVercel className="text-primary text-3xl cursor-pointer hover:scale-110" />,
    ],
    link: [
      "https://github.com/RenzVanni/comment_section",
      "https://comment-section-dev.vercel.app/",
    ],
    techs: [
      <FaHtml5 className="text-primary text-3xl" />,
      <FaCss3Alt className="text-primary text-3xl" />,
      <RiJavascriptLine className="text-primary text-3xl" />,
      <FaReact className="text-primary text-3xl" />,
    ],
  },
  {
    id: 4,
    title: "Job Listing",
    context:
      "Job listing is a project that showcase my JavaScript skills by filtering the jobs based on the selected categories.",
    disclaimer:
      "This project was from frontendmentor.io but the code was made by may self and not copy paste.",
    hero: "/thumbnail/job-listing.png",
    linksIcon: [
      <FaGithub className="text-primary text-3xl cursor-pointer hover:scale-110" />,
      <IoLogoVercel className="text-primary text-3xl cursor-pointer hover:scale-110" />,
    ],
    link: [
      "https://github.com/RenzVanni/job_listing",
      "https://job-listing-dev.vercel.app/",
    ],
    techs: [
      <FaHtml5 className="text-primary text-3xl" />,
      <FaCss3Alt className="text-primary text-3xl" />,
      <RiJavascriptLine className="text-primary text-3xl" />,
      <FaReact className="text-primary text-3xl" />,
    ],
  },
  {
    id: 5,
    title: "Tip Calculator",
    context:
      "Tip calculator is a small project showcasing my JavaScript skills in making calculator functionality.",
    disclaimer:
      "This project was from frontendmentor.io but the code was made by may self and not copy paste.",
    hero: "/thumbnail/tip-calculator.png",
    linksIcon: [
      <FaGithub className="text-primary text-3xl cursor-pointer hover:scale-110" />,
      <IoLogoVercel className="text-primary text-3xl cursor-pointer hover:scale-110" />,
    ],
    link: [
      "https://github.com/RenzVanni/tip-calculator",
      "https://tip-calculator-dev.vercel.app/",
    ],
    techs: [
      <FaHtml5 className="text-primary text-3xl" />,
      <FaCss3Alt className="text-primary text-3xl" />,
      <RiJavascriptLine className="text-primary text-3xl" />,
    ],
  },
  {
    id: 6,
    title: "Testimonials Slider",
    context:
      "Testimonial slider is a simple project, using JavaScript it enable switching slides.",
    disclaimer:
      "This project was from frontendmentor.io but the code was made by may self and not copy paste.",
    hero: "/thumbnail/testimonial-slider.png",
    linksIcon: [
      <FaGithub className="text-primary text-3xl cursor-pointer hover:scale-110" />,
      <IoLogoVercel className="text-primary text-3xl cursor-pointer hover:scale-110" />,
    ],
    link: [
      "https://github.com/RenzVanni/testimonials-slider",
      "https://testimonials-slider-dev.vercel.app/",
    ],
    techs: [
      <FaHtml5 className="text-primary text-3xl" />,
      <FaCss3Alt className="text-primary text-3xl" />,
      <RiJavascriptLine className="text-primary text-3xl" />,
    ],
  },
  {
    id: 7,
    title: "Advice Generator",
    context:
      "Advice generator is my first project involved in API. This uses the Advice Slip API to generate random quotes of advice.",
    disclaimer:
      "This project was from frontendmentor.io but the code was made by may self and not copy paste.",
    hero: "/thumbnail/advice-generator.png",
    linksIcon: [
      <FaGithub className="text-primary text-3xl cursor-pointer hover:scale-110" />,
      <IoLogoVercel className="text-primary text-3xl cursor-pointer hover:scale-110" />,
    ],
    link: [
      "https://github.com/RenzVanni/Advice-generator",
      "https://advice-generator-dev.vercel.app/",
    ],
    techs: [
      <FaHtml5 className="text-primary text-3xl" />,
      <FaCss3Alt className="text-primary text-3xl" />,
      <RiJavascriptLine className="text-primary text-3xl" />,
    ],
  },
];

export default data;
