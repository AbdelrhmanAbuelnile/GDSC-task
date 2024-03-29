import { HiOutlineMenu } from "react-icons/hi"
import { IoClose } from "react-icons/io5"
import { useState } from "react";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="lg:hidden">
      {isOpen ? (
        <IoClose
          className="text-third"
          fontSize="large"
          onClick={toggleMenu}
        />
      ) : (
        <HiOutlineMenu
          className="text-third"
          fontSize="large"
          onClick={toggleMenu}
        />
      )}

      {isOpen && (
        <ul
          onClick={toggleMenu}
          className="flex flex-col justify-center items-center gap-6
            bg-Lime-Green rounded-lg shadow-lg shadow-slate-500 w-52
            pt-2 absolute top-[94px] right-4
            text-xl font-medium text-white overflow-hidden"
        >
          <li className="border-b border-fourth w-full pl-2 hover:pl-5 pt-4">
            <a href="#">Home</a>
          </li>
          <li className="border-b border-fourth w-full pl-2 hover:pl-5 duration-300">
            <a href="#">About</a>
          </li>
          <li className="border-b border-fourth w-full pl-2 hover:pl-5 duration-300">
            <a href="#">Contact</a>
          </li>
          <li className="border-b border-fourth w-full pl-2 hover:pl-5 duration-300">
            <a href="#">Blog</a>
          </li>
          <li className="w-full pl-2">
            <a href="#">Careers</a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Menu;