import data from "../data/about_me.json";
import { motion } from "framer-motion";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const About_Me = () => {
  return (
    <div
      id="about"
      className="flex flex-col lg:flex-row lg:h-screen pb-14 lg:pb-28"
    >
      <div className="flex flex-1 justify-center lg:justify-start items-center h-full mb-12 lg:mb-0">
        <div className="bg-primary w-full h-full max-w-[500px]  min-h-[489px] max-h-[689px] p-2 rounded-xl relative ">
          {/* <motion.img
            whileInView={{ top: "-8px", left: "-8px" }}
            style={{ top: 0, left: 0 }}
            transition={{ duration: 0.8 }}
            src={data[0]?.image}
            alt="profile"
            className="w-full h-full object-cover object-top rounded-xl absolute"
          /> */}
          <motion.div
            whileInView={{ top: "-8px", left: "-8px" }}
            style={{
              top: 0,
              left: 0,
              position: "absolute",
            }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
          >
            <LazyLoadImage
              src={data[0].image}
              className="w-full h-full rounded-xl object-cover shadow-2xl "
            />
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col flex-1 items-center lg:items-start justify-center h-full relative">
        <motion.p
          whileInView={{ x: 0 }}
          style={{ x: 300 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-3 relative"
        >
          About Me
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center text-sm lg:text-start max-w-[650px] mb-10"
        >
          {data[0]?.context}
        </motion.p>
        <motion.p
          whileInView={{ x: 0 }}
          style={{ x: 300 }}
          transition={{ duration: 0.5 }}
          className="font-semibold text-xl mb-3"
        >
          Work Experience
        </motion.p>
        <motion.div
          whileInView={{ x: 0 }}
          style={{ x: 300 }}
          transition={{ duration: 0.5 }}
          className="border-l-2 border-primary px-4"
        >
          <div className="flex justify-start items-center w-full gap-4 mb-3">
            <div className=" h-10 w-10 rounded-full">
              <img
                src="./images/prosperna-logo.png"
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-lg">Frontend Developer Intern</p>
              <p className="text-md">Prosperna</p>
            </div>
          </div>
          <p className="text-sm">February 2024 - May 2024</p>
        </motion.div>
      </div>
    </div>
  );
};

export default About_Me;
