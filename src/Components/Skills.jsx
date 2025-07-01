import { useNavigate } from "react-router-dom"
import { SquareArrowLeft } from "lucide-react"
import "./Style.css"
function Skills() {
  let navigate = useNavigate()
  const Back = () => {
  let path = "/"
  navigate(path)
  }
  return (
    <>
        <div className="container">
            <button onClick={Back}><SquareArrowLeft/></button>
            <h2>Skills</h2>
        </div>
        <div>
            <ul>
                <li>C</li>
                <li>Python</li>
                <li>HTML & CSS</li>
                <li>JavaScript</li>
                <li>Git & GitHub</li>
            </ul>
        </div>
    </>
  )
}

export default Skills