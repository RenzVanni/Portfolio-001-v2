import { useState } from "react";
import { Link } from "react-scroll";
import { IoMenu } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Menu = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <div className="hidden md:flex justify-center gap-3 md:gap-7 py-6 fixed top-0 left-0 w-full bg-background z-10">
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

      <div className="flex md:hidden items-center justify-end py-4 fixed top-0 right-5 z-10">
        <IoMenu
          onClick={() => setShow(true)}
          className="text-primary text-2xl cursor-pointer"
        />
      </div>
      {show && (
        <div className="w-full h-full bg-black/55 flex flex-col gap-7 items-center justify-center fixed z-10 top-0 left-0 p-6">
          <div className="bg-background w-full h-4/5 rounded-xl flex flex-col items-center justify-between py-24 ">
            <Link
              onClick={() => setShow(false)}
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer text-lg hover:scale-110"
            >
              Home
            </Link>
            <Link
              onClick={() => setShow(false)}
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer text-lg hover:scale-110"
            >
              About
            </Link>
            <Link
              onClick={() => setShow(false)}
              to="capstone"
              smooth={true}
              duration={500}
              className="cursor-pointer text-lg hover:scale-110"
            >
              Capstone
            </Link>
            <Link
              onClick={() => setShow(false)}
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer text-lg hover:scale-110"
            >
              Projects
            </Link>
            <Link
              onClick={() => setShow(false)}
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer text-lg hover:scale-110"
            >
              Contact
            </Link>
          </div>
          <IoIosCloseCircleOutline
            onClick={() => setShow(false)}
            className="text-primary text-6xl cursor-pointer hover:scale-110"
          />
        </div>
      )}
    </>
  );
};

export default Menu;
