import { FaTwitter, FaFacebookSquare, FaYoutube, FaPinterest, FaInstagram, FaReact } from "react-icons/fa";
import Logo from "../assets/logoWhite.svg"

function Footer() {
  return (
    <div className="bg-Dark-Blue text-white px-3 lg:px-24 text-center flex flex-col justify-center items-center lg:justify-between gap-4 py-5 lg:py-16 w-full">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between gap-4 py-5 lg:py-16 w-full">
        
        <div className="flex flex-col justify-center items-center gap-10 lg:gap-20">
            <img src={Logo} alt="logo" className="" />
            <div className="flex flex-row justify-center items-center gap-3">
                <a href="#" className="text-xl hover:text-Lime-Green"><FaFacebookSquare /></a>
                <a href="#" className="text-xl hover:text-Lime-Green"><FaYoutube /></a>
                <a href="#" className="text-xl hover:text-Lime-Green"><FaTwitter /></a>
                <a href="#" className="text-xl hover:text-Lime-Green"><FaPinterest /></a>
                <a href="#" className="text-xl hover:text-Lime-Green"><FaInstagram /></a>
            </div>
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between">
            <a href="#" class="md:w-1/2 md:px-2 py-2 lg:py-4 hover:text-Lime-Green">About Us</a>
            <a href="#" class="md:w-1/2 md:px-2 py-2 lg:py-4 hover:text-Lime-Green">Contact</a>
            <a href="#" class="md:w-1/2 md:px-2 py-2 lg:py-4 hover:text-Lime-Green">Blog</a>
            <a href="#" class="md:w-1/2 md:px-2 py-2 lg:py-4 hover:text-Lime-Green">Careers</a>
            <a href="#" class="md:w-1/2 md:px-2 py-2 lg:py-4 hover:text-Lime-Green">Support</a>
            <a href="#" class="md:w-1/2 md:px-2 py-2 lg:py-4 hover:text-Lime-Green">Privacy Policy</a>
        </div>
        <div className="flex flex-col justify-center items-center lg:items-end gap-4">
            <button className="py-3 px-4 rounded-3xl text-white font-semibold bg-gradient-to-r from-Lime-Green to-Bright-Cyan hover:from-[#30d45cc9] hover:to-[#2bb7dac9]">Request Invite</button>
            <p className="text-Grayish-Blue">© Easybank. All Rights Reserved</p>
        </div>
        </div>
        <p className="text-Bright-Cyan text-center">Challenge by <a href="https://www.frontendmentor.io/" className="hover:underline">Frontend Mentor. </a> Coded with <span className="text-red-600">❤</span> and <FaReact  className="logo text-[#61dbfb] text-md inline"/>  by <a href="https://github.com/AbdelrhmanAbuelnile" className="hover:underline">Abdelrahman</a></p>
    </div>
  )
}

export default Footer