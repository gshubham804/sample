import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="my-6">
  <div className="first-row flex items-center mx-12">
        <div className="flex flex-row items-center w-1/3">
        <img className="rounded-full h-20 w-20 mr-4" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
            alt="" />
            <p className="text-3xl font-semibold text-black">SAMPLE</p>
        </div>
        <div className="flex justify-center space-x-16 border-l-2 border-r-2 border-dotted border-gray-400 w-1/3">
          <div className="flex flex-col">
            <p className="link link-underline link-underline-black-footer mb-4 text-gray-500 cursor-pointer">
              ABOUT
            </p>
            <p className="link link-underline link-underline-black-footer text-gray-500 cursor-pointer">
              PROGRAM
            </p>
          </div>
          <div className="flex flex-col">
            <p className="link link-underline link-underline-black-footer mb-4 text-gray-500 cursor-pointer">
              COURSES
            </p>
            <p className="link link-underline link-underline-black-footer text-gray-500 cursor-pointer">
              REVIEWS
            </p>
          </div>
        </div>
        <div className="flex justify-center space-x-10 w-1/3">
          <div className="flex flex-col">
            <p className="mb-4 text-gray-500 cursor-pointer">
              WWW.HALO-LAB.COM
            </p>
            <p className="text-gray-500 cursor-pointer">
              MAIL@HALO-LAB.COM
            </p>
          </div>
          <div className="flex flex-col">
            <p className="mb-4 text-gray-500 cursor-pointer">
              +38 096 272 2100
            </p>
            <p className="text-gray-500 cursor-pointer">
              UKRAINE, ODESSA
            </p>
          </div>
        </div>
      </div>

    <div className="second-row flex justify-between mx-12 mt-6">
        <div className="flex flex-row items-center">
            <img className="rounded-full h-12 w-12 mr-4" src="https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
            alt="" />
            <p className="text-sm text-gray-400 font-semibold">2021 HALO LAB. ALL RIGHTS RESERVED</p>
        </div>
        <div className="flex space-x-4">
            <FaFacebookF className="cursor-pointer border-gray-400 border-2 text-gray-500 rounded-full p-2 " size={40}/>
            <FaTwitter className="cursor-pointer border-gray-400 border-2 text-gray-500 rounded-full p-2 " size={40}/>
            <FaInstagram className="cursor-pointer border-gray-400 border-2 text-gray-500 rounded-full p-2 " size={40}/>
            <FaLinkedin className="cursor-pointer border-gray-400 border-2 text-gray-500 rounded-full p-2 " size={40}/>
        </div>
    </div>
    </div>
  )
}

export default Footer