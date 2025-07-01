import { Outlet } from "react-router"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Skills from "./Components/Skills"
import { useNavigate } from "react-router-dom"

function App() {
  let navigate = useNavigate()
  const AboutPath = () => {
    let path = "about"
    navigate(path)
  }
  const SkillPath = () => {
    let path = "skills"
    navigate(path)
  }
  const ProjectPath = () => {
    let path = "projects"
    navigate(path)
  }
  const ContactPath = () => {
    let path = "contact"
    navigate(path)
  }

  return (
    <>
      <div className="home">
      <h2>Hello, I'm <span className="highlight">Arya V P</span></h2>
      <p className="tagline">A Computer Science Student passionate about Web Development & AI</p>
      <p className="welcome">Welcome to my personal portfolio website.</p>
      </div>
      <div className="nav-links">  
        <button onClick={AboutPath}>About me</button>
        <button onClick={SkillPath}>Skills</button>
        <button onClick={ProjectPath}>Projects</button>
        <button onClick={ContactPath}>Contact</button>
      </div>
      <br />
      <Outlet/>
    </>
  )
}

export default App
