import { IoIosFolderOpen } from "react-icons/io";
import "./style.css"
import { IoMdCode } from "react-icons/io";
import { FaBookReader } from "react-icons/fa";

const Experience = () => {
  return (
    <div>
      <div className="p-8">
        <div className="w-[80%] md:w-[28%] md:ml-[72%]">
          <a href="/aniketresume.pdf" download>
            <div className="flex text-[#FFDB70] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] py-3 px-5 rounded-lg bg-gradient-to-r from-[#FFDB70]/30 to-[#202022]">
              <IoIosFolderOpen size={20} />
              <p className="pl-2">Download Resume</p>
            </div>
          </a>
        </div>
        <section className="timeline mt-5 md:mt-0">

          <div className="title-wrapper">
            <div>
              <IoMdCode className="text-[#FFDB70] rounded-md p-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" size={50} />
            </div>

            <h3 className="text-[#FAFAFA] font-[600] text-[1.5rem] tracking-wide">Experience</h3>
          </div>

          <ol className="timeline-list">
          <li className="timeline-item">
                <h4 className="h4 timeline-item-title">Software Engineer Intern</h4>
                <span>Infosys</span>
                <div className="timeline-text">
                  feb&apos;25 - Present
                </div>
                <br />
              <div className="timeline-text">
                <ul>
                  <li>•Learning and implementing Java, SQL, MySQL Server, C#, and .NET in real-world scenarios.</li>
                  <li>•Gaining hands-on experience in backend development and database management.</li>
                  <li>•Working with object-oriented programming concepts to develop efficient solutions.</li>
                </ul>
              </div>
            </li>

            <li className="timeline-item">
                <h4 className="h4 timeline-item-title">Software Development Intern</h4>
                <span>Fincart Financial Planner</span>
                <div className="timeline-text">
                  jun&apos;24 - Dec &apos;24
                </div>
                <br />
              <div className="timeline-text">
                <ul>
                  <li>•Worked on financial plan generation and approval systems, utilizing Next.js microservices and Spring Boot for scalable solutions.</li>
                  <li>•Developed a quota upgrade module in Next.js, enabling managers to set and update quotas for wealth managers via API.</li>
                  <li>•Converted HDFC Insurance API SOAP calls to JSON in .NET, improving data processing and integration efficiency.</li>
                  <li>•Identified and fixed a microservice logout issue in the Fincart frontend, ensuring the inner microservice logged out synchronously 
           with the outer application for a seamless user experience.</li>
                  <li>•Implemented a feature in Angular for users to port their existing insurance to another provider by interacting with a Port API to save the details.</li>
                  <li>•Developed a quota upgrade feature in Next.js, enabling managers to set and update individual quotas for wealth managers and save the changes via API.</li>
                  <li>•Built an API in Spring Boot to fetch and return a list of departments linked to the ticket support email, including department codes and names.</li>
                </ul>
              </div>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Frontend Intern</h4>
              <span>EL-FI Homes</span>
              <div className="timeline-text">
                july&apos;23 - Nov&apos;23
              </div>
              <br />
              <div className="timeline-text">
                <ul>
                  <li>•Integrated Google Solar API to calculate user-specific solar panel savings estimates, significantly boosting user engagement by providing personalized and actionable information.</li>
                  <li>•Utilized Maps API for location data.</li>
                  <li>•Effectively conveyed information using graphs for improved understanding.</li>
                  <li>•Build all website Responsively with Tailwind CSS in Reactjs. </li>
                </ul>
              </div>
            </li>

    
          </ol>
        </section>
        <div>
          <p className="text-[#FAFAFA] font-[600] tracking-wide text-[1.5rem]">Achievements</p>
          <div className="w-[90%] text-[#FAFAFA] bg-[#232325] mx-auto my-[1vh] md:my-[2vh] rounded-md py-4 px-4 md:px-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] border-[#303030] border-[1px]">
            <p className="mb-1">Highest Rating 1569 in leetcode solved 275+ DSA problems on leetcode</p>
            <p className="mb-1">Participated in hackathon</p>
            <p className="mb-1">Under 17 State level Basketball player.</p>
          </div>
        </div>
        <section className="timeline">

          <div className="title-wrapper">
            <div>
              <FaBookReader className="text-[#FFDB70] rounded-md p-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" size={40} />
            </div>

            <h3 className="text-[#FAFAFA] font-[600] text-[1.5rem] tracking-wide">Education</h3>
          </div>

          <ol className="timeline-list">

            <li className="timeline-item">

              <h4 className="h4 timeline-item-title">Maharaja Surajmal Institute of Technology(GGSIPU)</h4>

              <span>2021 — 2025</span>

              <p className="timeline-text">
                B.Tech-InformationTechnology
              </p>
              <p className="timeline-text">
                CGPA: 9.0
              </p>

            </li>
            <li className="timeline-item">

              <h4 className="h4 timeline-item-title">Spring Daisy Convent School</h4>

              <span>2021</span>

              <p className="timeline-text">
                Class 12th-CBSE
              </p>
              <p className="timeline-text">
                Percentage: 92.2 
              </p>

            </li>
            <li className="timeline-item">

              <h4 className="h4 timeline-item-title">Green Dalse Public School</h4>

              <span>2019</span>

              <p className="timeline-text">
                Class 10th-CBSE
              </p>
              <p className="timeline-text">
                Percentage: 86.8 
              </p>

            </li>

          </ol>
        </section>
      </div>
    </div>
  )
}

export default Experience