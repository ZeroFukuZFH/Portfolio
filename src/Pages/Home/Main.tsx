import Projects from "./Sections/Projects/Projects";
import Introduction from "./Sections/Introduction/Introduction";
import Socials from "./Sections/Socials/Socials";
import Services from "./Sections/Services/Services";
import { useEffect,} from "react";
import './main.css'

const intersection = () => { // animation 
  const cards = document.querySelectorAll('.element')
  const observer = new IntersectionObserver((entries)=>{
    console.log('new')
    entries.forEach(element => {
      element.target.classList.toggle('show',element.isIntersecting)
    },{
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
    });
  })
  cards.forEach((card) => {
    observer.observe(card)
  })
}

function Home(){
  
  useEffect(()=>{
    console.log('component has re-rendered - intersection')
    intersection()
  },[])

  return (
    <>
      <section className="element">
        <Introduction />
      </section>
      <section className="element">
        <Projects />
      </section>
      <section className="element">
        <Services />
      </section>
      <section className="element">
        <Socials />
      </section>
    </>
  )
}

export default Home;