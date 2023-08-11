import {FaSearch} from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center">
        <div className="cursor-pointer flex items-center space-x-4">
          <img className="rounded-full h-14 w-14" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="" />
          <p className="text-xl font-bold">Sample</p>
          </div>
        <div className="flex space-x-16 text-xl font-semibold">
            <p className="link link-underline link-underline-black cursor-pointer">ABOUT</p>
            <p className="link link-underline link-underline-black cursor-pointer">PROGRAM</p>
            <p className="link link-underline link-underline-black cursor-pointer">COURSES</p>
            <p className="link link-underline link-underline-black cursor-pointer">REVIEWS</p>
        </div>
        <div className="flex items-center space-x-12">
            <FaSearch className="cursor-pointer text-xl"/>
            <button className="cursor-pointer font-semibold text-xl rounded-3xl bg-white text-black hover:text-white hover:bg-orange-300 px-7 py-2">Sign In</button>
        </div>
    </div>
  )
}

export default Navbar

