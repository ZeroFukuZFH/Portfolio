import Projects from "./Sections/Projects/Projects";
import Introduction from "./Sections/Introduction/Introduction";
import Socials from "./Sections/Socials/Socials";
import Services from "./Sections/Services/Services";

function Home(){
  return (
    <>
      <Introduction/>
      <Projects/>
      <Services/>
      <Socials/>
    </>
  )
}

export default Home;