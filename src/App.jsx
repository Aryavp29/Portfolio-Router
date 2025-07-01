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
      <h1>PORTFOLIO</h1>
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
