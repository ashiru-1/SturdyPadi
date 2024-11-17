import mySvg1 from "./assets/test.svg"
import mySvg2 from "./assets/study.svg"
import mySvg3 from "./assets/guide.svg"
    function How(){

    return(
      <section className="md:mx-8 md:mt-9 mt-10">

        <h1 className="text-center font-extrabold text-3xl  md:text-4xl md:py-4 ">How It Works</h1>

        <div className="grid md:grid-cols-3  md:px-4  mb-12">

        <div className="bg-white p-6 shadow rounded-md">
            <div className="bg-blue-200 rounded-md w-[70px] h-[70px] flex items-center justify-center mb-3 shadow-blue-400 shadow-sm">
            <img src={mySvg1} alt="" className="w-11 h-11" />
            </div>
           
          <h3 className="text-blue-700 text-xl font-bold mb-2">Take the Assessment</h3>
          <p className="text-sm text-gray-600">Answer a series of engaging questions designed to analyze your strengths, preferences, and aspirations.</p>
        </div>

        <div className="bg-white p-6 shadow rounded-md">

        <div className="bg-blue-200 rounded-md w-[70px] h-[70px] flex items-center justify-center mb-3 shadow-blue-400 shadow-sm">
            <img src={mySvg3} alt="" className="w-11 h-11" />
            </div>

          <h3 className="text-blue-700 text-xl font-bold mb-2">Get Your Recommendation</h3>
          <p className="text-sm text-gray-600">Receive an insightful report suggesting the tech niche that fits you best, we guide you towards where you’ll thrive.</p>
        </div>

        <div className="bg-white p-6 shadow rounded-md">

        <div className="bg-blue-200 rounded-md w-[70px] h-[70px] flex items-center justify-center mb-3 shadow-blue-400 shadow-sm">
            <img src={mySvg2} alt="" className="w-11 h-11" />
            </div>
          <h3 className="text-blue-700 text-xl font-bold mb-2">Download Your Study Guide</h3>
          <p className="text-sm text-gray-600">Download a personalized PDF study guide packed with valuable learning resources and a roadmap to help you succeed in your chosen niche.</p>
        </div>

      </div>
      </section>
    )

}

export default How;