import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <>
  <div className="first-row flex items-center">
        <div className="text-xl font-semibold text-center w-1/3">Logo</div>
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
        <div>
            <img src="" alt="" />
            <p>2021 HALO LAB. ALL RIGHTS RESERVED</p>
        </div>
        <div className="flex space-x-4">
            <FaFacebookF/>
            <FaTwitter/>
            <FaInstagram/>
            <FaLinkedin/>
        </div>
    </div>
    </>
  )
}

export default Footer