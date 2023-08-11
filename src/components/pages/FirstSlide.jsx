import Navbar from "../layout/Navbar";

const FirstSlide = () => {
  return (
    <div className="slide-from-left bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500
    px-12 text-white py-8 rounded-b-[6rem]">
          <Navbar/>
    <div className="mt-12 flex flex-row">
        <div className="w-1/2">
            <p className="text-[5rem]">
                Your next big
                </p>
                <p className="text-[5rem] leading-none"> idea starts here
            </p>
            <p className="text-xl mt-4">The ideal framework to learn how to<br/> manage all aspects of startup.</p>
            <button className="rounded-3xl bg-orange-300 mt-8 px-7 py-3 font-bold text-3xl">STARTUP</button>
        </div>
        <div className="w-1/2">
            <img src="https://assets.website-files.com/61e57244c283e5456130c457/61e929ff713f410571efc78b_hero_illustr.svg" alt="" />
        </div>
    </div>
    <div className="flex flex-row justify-around mt-12 font-bold text-4xl">
        <p>TransferWise</p>
        <p>WooCommerce</p>
        <p>PayPal</p>
        <p>Payoneer</p>
    </div>
    <div className="flex flex-col text-center rounded-[5rem] bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100
    p-12 mt-12">
        <div className="">
            <div className="mb-8 flex justify-between text-[3rem] font-semibold text-black">
            <p className="w-1/3 ">200+</p>
            <p className="w-1/3 ">150+</p>
            <p className="w-1/3 ">10k+</p>
            </div>
            <div className="text-black flex">
            <p className="w-1/3 px-12 border-r-2 border-dotted border-gray-400">Ideal courses to sell physical and digital products from your site
on WordPress.com</p>
            <p className="w-1/3 px-12 border-r-2 border-dotted border-gray-400">Experts share their knowledge on building and growing a web presence.</p>
            <p className="w-1/3 px-12 ">Small businesses and online stores call WordPress.com home. No code, no complexities.

</p>
            </div>
        </div>
    </div>
    </div>
  )
}



export default FirstSlide