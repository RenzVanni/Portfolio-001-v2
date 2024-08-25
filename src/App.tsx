import About_Me from "./components/About_Me";
import Capstone from "./components/Capstone";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";
import { FaAngleDoubleUp } from "react-icons/fa";
import { Link } from "react-scroll";

const App = () => {
  return (
    <div className="bg-background px-5 md:px-28 relative overflow-hidden">
      <Home />
      <About_Me />
      <Capstone />
      <Projects />
      <Contact />
      <Link to="home" smooth={true} duration={500}>
        <FaAngleDoubleUp className="animate-bounce text-primary text-2xl hover:cursor-pointer hover:scale-110 fixed bottom-10 right-10" />
      </Link>
    </div>
  );
};

export default App;
