
function Footer(){
    return(
        <footer className="bg-gray-900 p-10 font-[sans-serif] tracking-wide">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:mx-7">
        <div className="lg:flex lg:items-center ">
          <a href="#">
          <h1 className='text-white font-black text-4xl text-center'>Sturdy<span className='italic text-[#007bff]'>Padi</span></h1>
          </a>
        </div>


        <div className="flex flex-row justify-between">
        <div>
          <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
          <ul className="space-y-4">
            <li>
              <a href="#" className="text-gray-300 hover:text-white text-sm">Email</a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white text-sm">Phone</a>
            </li>
           
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6 text-white">Information</h4>
          <ul className="space-y-4">
            <li>
              <a href="#" className="text-gray-300 hover:text-white text-sm">About Us</a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white text-sm">Terms &amp; Conditions</a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white text-sm">Privacy Policy</a>
            </li>
          </ul>
        </div>
        </div>

      </div>

      <p className='text-white text-center text-sm mt-10'>©Sturdy<span className='italic text-[#007bff]'>Padi</span> . All rights reserved.</p>
    </footer>
    )
}

export default Footer;