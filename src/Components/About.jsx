import { SquareArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"
import "./Style.css"
function About() {
  let navigate = useNavigate()
  const Back = () => {
  let path = "/"
  navigate(path)
  }
  return (
    <>
      <div className="container">
        <button onClick={Back}><SquareArrowLeft /></button>
         <h2>About Me</h2>
      </div>
      <div>
        <p>I am a passionate 4th-year Computer Science student, eager to explore and experience the programming world. I love solving problems, working on creative projects, and learning new technologies.</p>
      </div>
    </>
  )
}

export default About