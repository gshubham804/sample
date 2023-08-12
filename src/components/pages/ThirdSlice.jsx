import {FiArrowRight} from 'react-icons/fi';

const ThirdSlice = () => {
  return (
    <div
      className="my-12 p-12 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))]
     from-green-200 via-green-300 to-blue-500 rounded-b-[6rem] h-screen"
    >
      <div className="first-row flex flex-row justify-around">
        <div className="w-1/2 text-white text-[2rem] font-semibold leading-10">
          <p>Professional courses </p>
          <p>on creating websites</p>
        </div>
        <div className="w-1/2 text-white text-xl font-semibold">
          <p>
            Our courses are complete professional courses of high quality that
            include a set of video lessons, practical and training materials.
          </p>
        </div>
      </div>
      <div className="second-row flex space-x-10 mt-6 ">
        <div
          className="rounded-2xl bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))]
             from-gray-100 to-gray-300 p-6 h-[25rem] relative"
        >
          <p className="">DESIGN</p>
          <p className="text-xl font-semibold">
            How to make a quality site in WordPress in 40 Hours without
            experience
          </p>
          <div className='cursor-pointer flex space-x-4 text-blue-500 font-semibold text-lg bottom-8 absolute items-center'>
          <p>READ MORE</p>
          <FiArrowRight size={20}/>
          </div>
        </div>
        <div
          className="rounded-2xl bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))]
             from-gray-100 to-gray-300 p-6 h-[25rem] relative"
        >
          <p className="">DESIGN</p>
          <p className="text-xl font-semibold">
            How to make a quality site in WordPress in 40 Hours without
            experience
          </p>
          <div className='cursor-pointer flex space-x-4 text-blue-500 font-semibold text-lg bottom-8 absolute items-center'>
          <p>READ MORE</p>
          <FiArrowRight size={20}/>
          </div>
        </div>
        <div
          className="rounded-2xl bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))]
             from-gray-100 to-gray-300 p-6 h-[25rem] relative"
        >
          <p className="">DESIGN</p>
          <p className="text-xl font-semibold">
            How to make a quality site in WordPress in 40 Hours without
            experience
          </p>
          <div className='cursor-pointer flex space-x-4 text-blue-500 font-semibold text-lg bottom-8 absolute items-center'>
          <p>READ MORE</p>
          <FiArrowRight size={20}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSlice;
