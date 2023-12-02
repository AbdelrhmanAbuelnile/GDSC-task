import Logo from "../assets/logo.svg"
import Menu from "./Menu"

function Header() {
  return (
    <header className="px-10 lg:px-24 py-6 w-full bg-white flex flex-row justify-between items-center fixed z-10">
        <img src={Logo} alt="" />
        <ul className="hidden md:flex md:flex-row md:gap-4 text-Grayish-Blue">
           <li>
            <a href="#">Home</a>
            </li> 
           <li>
            <a href="#">About</a>
            </li> 
           <li>
            <a href="#">Contact</a>
            </li> 
           <li>
            <a href="#">Blog</a>
            </li> 
           <li>
            <a href="#">Careers</a>
            </li> 
        </ul>
        
        <Menu />

        <div className="hidden md:block">
          <button className="py-3 px-4 rounded-3xl text-white font-semibold bg-gradient-to-r from-Lime-Green to-Bright-Cyan hover:from-[#30d45cc9] hover:to-[#2bb7dac9]">Request Invite</button>
        </div>
    </header>
  )
}

export default Header