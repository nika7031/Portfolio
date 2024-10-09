import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.webp"
const Navbar = () => {
  return (
   <nav className="flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
        <img src={logo} className="mx-2" width={50} height={33}
        alt="Logo"/>
        </a>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
    <a
  href="https://www.linkedin.com/in/parnika-sharma-196a532a9"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn"
>
  <FaLinkedin />
</a>
<a
  href="https://github.com/nika7031"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Github"
>
  <FaGithub />
</a>
<a
  href="https://www.instagram.com/_parnika.sharma_/profilecard/?igsh=NTFtc2t0czZ2ZGhj"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Instagram"
>
  <FaInstagram />
</a>


    </div>
   </nav>
  );
};

export default Navbar;
