import Projects from "./Sections/Projects/Projects";
import Introduction from "./Sections/Introduction/Introduction";
import Socials from "./Sections/Socials/Socials";
import Services from "./Sections/Services/Services";
import { useEffect, useState } from "react";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return scrollPosition;
};


function Home(){
  const pos:number = useScrollPosition();

    // hoist each page y location then if scroll > end || scroll < start then show
  return (
    <>
      <Introduction />
      <Projects />
      <Services />
      <Socials />
    </>
  )
}

export default Home;