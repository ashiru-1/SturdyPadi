
import front from "./assets/front.jpg"
import back from "./assets/back.jpg"
import design from "./assets/design.jpg"
import data from "./assets/data.jpg"
import manage from "./assets/manage.jpg"
import security from "./assets/security.jpg"


function Courses(){


  return (

    <div className="my-7 py-8 md:mx-9">
        <h1 className="text-center font-extrabold text-3xl md:text-4xl md:mb-4 ">Explore Popular Tech Niches</h1>

<div className="overflow-x-auto flex gap-4 p-4">

  {/* Card 1 */}
  <div className="flex-none w-[330px] rounded-lg bg-white shadow-lg dark:bg-neutral-700">
  <img
        className="rounded-t-lg h-2/5  w-full" 
        src={front}
        alt=""
      />
    <div className="px-4 py-4">
      <h5 className="pb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Front-End Development 
      </h5>
      <p className="mb-4 text-[0.9rem] text-neutral-600 dark:text-neutral-200">
      Frontend development focuses on creating the user interface (UI) of a website or web application. It involves using languages like HTML, CSS, and JavaScript, along with frameworks like React, Vue, or Angular to build interactive, responsive, and user-friendly designs. The frontend is what users see and interact with directly, so ensuring a seamless, accessible, and visually appealing experience is key.
      </p>
    </div>
  </div>

    {/* capb-2 */}
    <div className="flex-none w-[330px] rounded-lg bg-white shadow-lg dark:bg-neutral-700">
  <img
        className="rounded-t-lg h-2/5 w-full " 
        src={back}
        alt=""
      />
    <div className="px-4 py-4">
      <h5 className="pb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Back-End Engineering 
      </h5>
      <p className="mb-4 text-[0.9rem] text-neutral-600 dark:text-neutral-200">
      Backend development deals with the server-side of web applications. It involves working with databases, server configurations, APIs, and the logic that powers the user-facing components. Backend developers typically work with languages like Node.js, Python, or Java, and technologies like databases (SQL/NoSQL), RESTful APIs, and cloud services to ensure the app functions smoothly, handles data securely, and performs efficiently.
      </p>
    </div>
  </div>

  {/* card 3 */}
  <div className="flex-none w-[330px] rounded-lg bg-white shadow-lg dark:bg-neutral-700">
  <img
        className="rounded-t-lg h-2/5 w-full " 
        src={data}
        alt=""
      />
    <div className="px-4 py-4">
      <h5 className="pb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Data Analytics 
      </h5>
      <p className="mb-4 text-[0.9rem] text-neutral-600 dark:text-neutral-200">
      Data analytics is the process of examining large datasets to uncover hidden patterns, correlations, and insights. Analysts use tools like Python, R, SQL, and platforms like Tableau or Power BI to transform raw data into actionable insights for business decision-making. With data analytics, businesses can optimize performance, improve customer experiences, and make data-driven decisions.
      </p>
    </div>
  </div>


  {/* card 4 */}

  <div className="flex-none w-[330px] rounded-lg bg-white shadow-lg dark:bg-neutral-700">
  <img
        className="rounded-t-lg w-full h-2/5 " 
        src={design}
        alt=""
      />
    <div className="px-4 py-4">
      <h5 className="pb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Product Design 
      </h5>
      <p className="mb-4 text-[0.9rem] text-neutral-600 dark:text-neutral-200">
      Product design is about creating products that are both functional and aesthetically pleasing. Designers focus on the user experience (UX) and user interface (UI) design, ensuring that products are intuitive, easy to navigate, and meet users’ needs. They use tools like Sketch, Figma, or Adobe XD to create prototypes and mockups and work closely with developers to bring designs to life.
      </p>
    </div>
  </div>



  {/* card 5 */}

  <div className="flex-none w-[330px] rounded-lg bg-white shadow-lg dark:bg-neutral-700">
  <img
        className="rounded-t-lg h-2/5 w-full " 
        src={security}
        alt=""
      />
    <div className="px-4 py-4">
      <h5 className="pb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Cybersecurity 
      </h5>
      <p className="mb-4 text-[0.9rem] text-neutral-600 dark:text-neutral-200">
      Cybersecurity involves protecting systems, networks, and data from digital attacks or unauthorized access. It includes practices like encryption, firewalls, secure coding, vulnerability testing, and more. Cybersecurity professionals help ensure that software and data remain protected from hackers, identity theft, and other malicious activities. This field is critical for protecting sensitive information and maintaining user trust.
      </p>
    </div>
  </div>



  {/* card 6 */}

  <div className="flex-none w-[350px] rounded-lg bg-white shadow-lg dark:bg-neutral-700">
  <img
        className="rounded-t-lg pb-2/5 w-full h-2/5" 
        src={manage}
        alt=""
      />
    <div className="px-4 py-4 pb-10">
      <h5 className="pb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Product Management
      </h5>
      <p className="mb-4 text-[0.9rem] text-neutral-600 dark:text-neutral-200">
      Product management is the process of overseeing the development and lifecycle of a product. Product managers (PMs) coordinate teams, prioritize tasks, and ensure the product meets user needs and business goals. They work across design, development, and marketing teams to make strategic decisions about product features, market fit, and timelines. PMs are the visionaries and decision-makers, often balancing customer needs with business objectives.
      </p>
    </div>
  </div>

 

</div>
    </div>
  );
}

export default Courses;
