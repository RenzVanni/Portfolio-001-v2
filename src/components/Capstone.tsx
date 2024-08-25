import { motion } from "framer-motion";
import data from "../data/capstone";

const Capstone = () => {
  return (
    <div
      id="capstone"
      className="flex flex-col pb-14 lg:pb-28 items-center justify-start h-auto"
    >
      <p className="font-bold text-3xl text-center mb-12">{data?.title}</p>
      {data?.devs.map((item, index) => (
        <p key={index} className="font-semibold text-center mb-4">
          {item?.name} - {item?.role}
        </p>
      ))}
      <p className="text-center my-4">{data?.context}</p>
      <div className="flex items-center justify-center space-x-3 mb-8 md:mb-36">
        <p>Tech Stack</p>
        <hr className="border border-primary h-[25px]" />
        {data?.tech.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>

      <div className="w-full flex items-start justify-center ">
        <div className="w-full flex justify-center">
          <motion.div
            whileInView={{ skewY: "-8deg", skewX: "-2deg" }}
            style={{
              skewY: 0,
              skewX: 0,
            }}
            transition={{ duration: 0.5 }}
            className="w-[300px] h-[250px] md:w-[1200px] md:h-[600px] bg-primary rounded-xl relative"
          >
            <motion.img
              whileInView={{ top: "-8px", right: "8px" }}
              style={{
                top: 0,
                right: 0,

                position: "absolute",
              }}
              transition={{ duration: 1 }}
              src={data?.hero}
              alt="image"
              className="w-full h-full object-center md:object-cover rounded-xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Capstone;
