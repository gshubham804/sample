
const SecondSlide = () => {
  return (
    <div className="px-12 my-12 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 h-screen ">
        <p className="text-center font-semibold text-4xl mb-8">Students reviews</p>
        <div className="flex flex-row ">
            <div className="flex flex-col items-center w-1/3">
                <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="" />
                <div className="text-center mt-6 border-dotted border-gray-400 border-r-2">
                    <p className="my-2 text-xl font-semibold">Anna Tyuneva</p>
                    <p className="leading-8 px-12">The course is great! Teachers talks very interesting and accessible. Thank you very much!</p>
                </div>
            </div>
            <div className="flex flex-col items-center w-1/3">
            <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="" />
                <div className="text-center mt-6 ">
                    <p className="my-2 text-xl font-semibold">Mykola Dunayev</p>
                    <p className="leading-8 px-12">The course is clear enough. Well explained a lot of practice. I recommend to everyone!</p>
                </div>
                </div>
                <div className="flex flex-col items-center w-1/3">
                <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="" />
                <div className="text-center mt-6 border-dotted border-gray-400 border-l-2">
                    <p className="my-2 text-xl font-semibold">Nastya Kozarchuk</p>
                    <p className="leading-8 px-12">The training was in one breath. Very accessible courses, everything is very clear and good.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SecondSlide