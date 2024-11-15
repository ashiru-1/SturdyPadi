import myImage from "./assets/hero.png"

function Hero(){
    return(
      <div class="font-sans max-w-6xl max-md:max-w-md mx-auto">
      <div class="grid md:grid-cols-2 items-center md:gap-8 gap-6">
        <div class="max-md:order-1 max-md:text-center">
          <h2 class="text-gray-800 lg:text-6xl md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[56px] px-3">Find Your Perfect Tech Fit with Sturdy<span class="text-blue-600 italic">Padi</span></h2>
          <p class="text-gray-600 mt-6 text-base leading-relaxed mx-5 justify-center">Take a simple assessment, discover the tech niche that matches your skills and interests, and kickstart your journey with a tailored study guide.</p>

          <button type='button'
            class="mt-6 bg-blue-600 hover:bg-transparent hover:text-blue-600 border-2 border-blue-600 transition-all text-white font-semibold text-sm tracking-wide rounded-md px-6 py-2.5">Get Started
            </button>


        </div>

        <div class="lg:h-[550px] md:h-[550px] flex items-center">
          <img src={myImage} class="rounded-md lg:w-4/5" alt="Dining Experience" />
        </div>
      </div>

      
    </div>
    )
}

export default Hero;