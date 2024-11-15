
function About(){
    return(
        <div class="bg-white-100  mt-10 font-sans">

      <div class="lg:max-w-7xl max-w-lg mx-auto py-8 bg-white rounded-lg  pb-5 mb-4 px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div class="max-h-80">
            <img src="https://readymadeui.com/management-img.webp" alt="Image" class="rounded-md object-cover w-full h-full" />
          </div>
          <div>
            <h2 class="text-3xl font-extrabold  text-center  mb-4">Who Are We?</h2>
            <p class="text-gray-600 text-sm leading-6">
            At <span className="font-extrabold">Sturdy<span className="text-[#007bff] font-bold italic">Padi</span></span>, we are dedicated to empowering tech newbies to discover their true potential. Our platform is designed to guide you through your tech journey, offering personalized assessments, curated resources, and a supportive community to help you succeed. <br/> <p className="mt-3 font-semibold">We believe everyone deserves a sturdy foundation, and that’s why we’re here to:</p>
            </p>
            <ul class="list-disc text-sm text-gray-600 space-y-2 pl-4  mt-2">
              <li>Help you discover your perfect tech niche.</li>
              <li>Provide tools to build your skills.</li>
              <li>Create a space to connect and grow with others.</li>
              <li>Support you in transforming your visions into reality.</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="text-center bg-gray-800 px-11 justify-center text-white py-[3.5rem] text-[1.2rem]">
              <p><span className="font-extrabold">Sturdy<span className="text-[#007bff] font-bold italic">Padi</span></span> is more than a platform—it is your companion in navigating the tech world with confidence and clarity. Join us today so we can build a brighter future together!</p>
            </div>
    </div>
    )
}

export default About;