import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiJavascriptLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { RiNotionFill } from "react-icons/ri";

import { FaGithub } from "react-icons/fa";

const data = {
  id: 1,
  name: "RENZ VANNI M. BATO",
  image: "/photo/grad-pic-1.jpeg",
  context:
    "I specialized in HTML, CSS, and React, I also know a little bit of MERN stack. My goal as frontend developer was to enhance what i currently know and in the future become a full stack developer.",
  repo: (
    <a href="https://github.com/RenzVanni" target="_blank">
      <FaGithub className="text-primary text-3xl cursor-pointer hover:scale-110" />
    </a>
  ),
  tech: [
    <FaHtml5 className="text-primary text-3xl" />,
    <FaCss3Alt className="text-primary text-3xl" />,
    <RiTailwindCssFill className="text-primary text-3xl" />,
    <RiJavascriptLine className="text-primary text-3xl" />,
    <TbBrandTypescript className="text-primary text-3xl" />,
    <FaReact className="text-primary text-3xl" />,
    <FaNodeJs className="text-primary text-3xl" />,
    <SiExpress className="text-primary text-3xl" />,
    <RiNotionFill className="text-primary text-3xl" />,
  ],
};

export default data;
