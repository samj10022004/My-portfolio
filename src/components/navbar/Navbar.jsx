import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import { motion } from "framer-motion"
const Navbar = () => {
  return (
    <div className="navbar">
        <Sidebar/>
      <div className="wrapper">
        <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>Sanyam Jain</motion.span>
        <div className="social">
            <a href="https://www.linkedin.com/in/sanyam-jain-a7ba0922a/" className="" id=""><img src="/linkedin.png" alt="linkedin"/></a>
            <a href="https://github.com/samj10022004" className="" id=""><img src="/github.jpg" alt="github"/></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
