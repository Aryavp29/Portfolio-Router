import { useNavigate } from "react-router"
import { SquareArrowLeft } from  "lucide-react"
import "./Style.css"
function Contact() {
    let navigate = useNavigate()
    const Back = () => {
        let path = "/"
        navigate(path)
    }
  return (
    <>
        <div className="container">
            <button onClick={Back}><SquareArrowLeft /></button>
            <h2>Contact Me</h2>
        </div>
        <div>
          <p>Email: <a href="mailto:29aryaprathab@gmail.com">29aryaprathab@gmail.com</a></p>
          <p>GitHub: <a href="https://github.com/Aryavp29" target="_blank">https://github.com/Aryavp29</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/arya-v-p-18082b28b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">https://www.linkedin.com/in/arya-v-p-18082b28b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app</a></p>
        </div>
    </>
  )
}

export default Contact