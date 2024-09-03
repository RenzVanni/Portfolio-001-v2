import { FaAngleDoubleUp } from "react-icons/fa";
import { Link } from "react-scroll";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading";
const Home = lazy(() => import("./components/Home"));
const About_Me = lazy(() => import("./components/About_Me"));
const Capstone = lazy(() => import("./components/Capstone"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="bg-background px-5 md:px-28 relative overflow-hidden">
        <Home />
        <About_Me />
        <Capstone />
        <Projects />
        <Contact />
        <Link to="home" smooth={true} duration={500}>
          <FaAngleDoubleUp className="animate-bounce text-primary text-2xl hover:cursor-pointer hover:scale-110 fixed bottom-10 right-5 lg:right-28" />
        </Link>
      </div>
    </Suspense>
  );
};

export default App;
