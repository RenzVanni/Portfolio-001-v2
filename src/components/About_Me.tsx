import data from "../data/about_me.json";
import { motion } from "framer-motion";

const About_Me = () => {
  return (
    <div
      id="about"
      className="flex flex-col lg:flex-row lg:h-screen pb-14 lg:pb-28"
    >
      <div className="flex flex-1 justify-center lg:justify-start items-center h-full mb-12 lg:mb-0">
        <div className="bg-primary w-full h-full max-w-[500px]  min-h-[489px] max-h-[689px] p-2 rounded-xl relative ">
          <motion.img
            whileInView={{ top: "-8px", left: "-8px" }}
            style={{ top: 0, left: 0 }}
            transition={{ duration: 0.8 }}
            src={data[0]?.image}
            alt="profile"
            className="w-full h-full object-cover object-top rounded-xl absolute"
          />
        </div>
      </div>
      <motion.div className="flex flex-col flex-1 items-center lg:items-start justify-center h-full relative">
        <motion.p
          whileInView={{ x: 0 }}
          style={{ x: 500 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold mb-3 relative"
        >
          About Me
        </motion.p>
        <p className="text-center lg:text-start max-w-[650px]">
          {data[0]?.context}
        </p>
      </motion.div>
    </div>
  );
};

export default About_Me;
