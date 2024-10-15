import Link from "next/link"
import { FaYoutube } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer(){
    return(
        <div >

          <h1></h1>
          <footer className="footer">

          <ul>

            <a href="https://www.youtube.com">YouTube<li className="youtube-icon"> <FaYoutube size={35}/></li></a>

            <a href="https://www.instragram.com">Instagram<li className="instagram-icon"><FaInstagramSquare size={35}/></li></a>

            <a href="https://github.com/tanzeela-0325">GitHub Id<li className="github-icon"><FaGithub size={35}/></li>
            </a>
          </ul>
          
          <div className="footer-N">
          <p className="mt-1"><FaCopyright /></p>
          <p>Tanzeela Syeda | All Right upside Down</p>
          </div>
          </footer>
           
        </div>
    )
}