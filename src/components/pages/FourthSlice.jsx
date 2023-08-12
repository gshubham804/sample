
const FourthSlice = () => {
  return (
    <div className="h-screen flex flex-row bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500
    px-12 text-white pt-8 rounded-b-[6rem] mb-8">
<div className="w-1/2 flex flex-col items-start justify-center">
    <p className="text-[4rem] font-semibold mb-8">Still have questions?</p>
    <p className="text-2xl ">Leave a request and we will contact you to help</p>
    <p className="text-2xl mb-8">you choose the best training format.</p>
    <div className="w-full flex flex-row justify-between">
        <input type="email" placeholder="Your email"
        className="w-3/5 bg-transparent border-[1px] rounded-[4rem]
         placeholder:text-white placeholder:text-xl pl-4" />
    <button className="cursor-pointer font-semibold text-xl rounded-[4rem]
     text-white bg-orange-300 px-10 py-6 w-1/3">SUBMIT</button>
    </div>
</div>
<div className="w-1/2 text-center">
    <img src="https://assets.website-files.com/61e57244c283e5456130c457/61ea70a302e7b5f3430a705d_questions_illustr.svg" alt="" />
</div>
    </div>
  )
}

export default FourthSlice