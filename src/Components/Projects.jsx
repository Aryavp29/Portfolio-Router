import { SquareArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"
import "./Style.css"
function Projects() {
    let navigate = useNavigate()
    const Back = () => {
        let path = "/"
        navigate(path)
    }
  return (
    <>
        <div className="container">
            <button onClick={Back}><SquareArrowLeft /></button>
            <h2>Projects</h2>
        </div>
        <div class="project">
            <h3>Calculator Web App</h3>
            <p>A simple web-based calculator built using HTML, CSS, and JavaScript with a neat UI layout and error handling.</p>
        </div>
    </>
  )
}

export default Projects