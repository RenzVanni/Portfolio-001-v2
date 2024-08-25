import data from "../data/home";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Home = () => {
  return (
    <div id="home" className="flex flex-col h-screen mb-16">
      <div className="flex justify-center gap-3 md:gap-7 py-6">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer text-sm hover:scale-110"
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer text-sm hover:scale-110"
        >
          About
        </Link>
        <Link
          to="capstone"
          smooth={true}
          duration={500}
          className="cursor-pointer text-sm hover:scale-110"
        >
          Capstone
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer text-sm hover:scale-110"
        >
          Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="cursor-pointer text-sm hover:scale-110"
        >
          Contact
        </Link>
      </div>

      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
        <div className="flex flex-1 flex-col h-full ">
          <motion.div
            whileInView={{ x: 0 }}
            style={{ x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex flex-1 flex-col justify-center items-start"
          >
            <p className="text-3xl font-bold mb-2">Hi! I'm {data?.name}</p>
            <p className="mb-6">{data?.context}</p>
            {data?.repo}
          </motion.div>

          <div className="flex flex-1 items-center justify-end h-auto">
            <motion.div
              whileInView={{ x: 0 }}
              style={{ x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex flex-1 flex-wrap items-center h-[30px] gap-4"
            >
              <p>Tech Stack</p>
              <hr className="border border-primary h-full" />
              {data?.tech.map((item, index) => (
                // <img key={index} src={item} alt="" className="h-full" />
                <div key={index}>{item}</div>
              ))}
              {/* <RiNotionFill className="text-primary" /> */}
            </motion.div>
          </div>
        </div>

        <div className="hidden md:flex flex-1 items-center justify-end h-full">
          <motion.div
            whileInView={{ scale: 1 }}
            style={{ scale: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-[600px] max-h-[600px] rounded-full overflow-hidden"
          >
            {/* <img
              src={data?.image}
              alt="profile"
              className="w-full h-full object-cover object-top"
            /> */}
            <LazyLoadImage
              src={data?.image}
              className="w-full h-full object-cover object-top"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
