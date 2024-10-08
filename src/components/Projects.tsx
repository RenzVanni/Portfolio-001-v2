import React from "react";
import data from "../data/projects";
import { motion } from "framer-motion";
import { Projects_Prop, Project_Map_Prop } from "../types/projects_prop";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProjectItem: React.FC<Project_Map_Prop> = (item, index) => {
  return (
    <div
      key={index}
      className={`flex flex-col ${
        item?.index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      } items-center justify-between  gap-4 md:gap-14 mb-10`}
    >
      <motion.div
        whileInView={{
          skewX: item?.index % 2 === 0 ? "2deg" : "-2deg",
          skewY: item?.index % 2 === 0 ? "4deg" : "-4deg",
          y: [0, -10, 0],
        }}
        style={{
          skewX: 0,
          skewY: 0,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          y: {
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
        className="bg-white h-[200px] w-[300px] md:h-[350px] md:w-[550px] relative rounded-xl mb-4 lg:mb-0"
      >
        <motion.div
          whileInView={{ top: "-8px", right: "8px" }}
          style={{
            top: 0,
            right: 0,
            position: "absolute",
          }}
          transition={{ duration: 0.5 }}
          className="w-full h-full"
        >
          <LazyLoadImage
            src={item?.item?.hero}
            className="w-full h-full rounded-xl object-cover shadow-2xl absolute "
          />
        </motion.div>
      </motion.div>
      <motion.div
        whileInView={{ x: 0 }}
        style={{ x: item?.index % 2 === 0 ? 300 : -300 }}
        transition={{ duration: 0.5 }}
        className="flex-1 h-full w-full "
      >
        <p className="font-bold text-2xl mb-1">{item?.item?.title}</p>
        <p className="text-sm mb-6">{item?.item?.context}</p>
        <div className="flex flex-1 flex-wrap items-center h-auto gap-4 mb-5">
          <p>Tech Stack</p>
          <hr className="border border-primary h-[25px]" />
          {item?.item?.techs?.map((tech: any, index: number) => (
            <div key={index}>{tech}</div>
          ))}
        </div>
        <div className="flex flex-1 flex-wrap items-center h-auto gap-4">
          <p>Link</p>
          <hr className="border border-primary h-[25px]" />
          {item?.item?.linksIcon?.map((link: any, index: number) => (
            <a key={index} href={item?.item?.link[index]} target="_blank">
              {link}
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
const Projects = () => {
  return (
    <div id="projects" className="flex flex-col gap-8 mb-10">
      <p className="font-bold text-3xl text-center mb-12">Projects</p>
      {data?.map((item: Projects_Prop, index: number) => {
        return (
          <React.Fragment key={index}>
            <ProjectItem item={item} index={index} />;
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Projects;
