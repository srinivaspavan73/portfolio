// // import { FaFacebook, FaInstagram, FaTelegramPlane, FaArrowCircleUp   } from "react-icons/fa";
// // import { MdEmail } from "react-icons/md";
// // import { FaSquareXTwitter, FaLinkedin  } from "react-icons/fa6";
// // import Project from "../components/Project";
// // import { FaLandmark } from "react-icons/fa";
// // import user_info from "../data/user_info.js"; 
// // import ToggleTheme from "../components/ToggleTheme.jsx";
// // import { AppContext } from "../App.jsx";
// // import { useContext } from "react";
// // import GitHubButton from 'react-github-btn'
// // import { IoIosArrowForward } from "react-icons/io";
// // import ExperienceItem from '../components/ExperienceItem';


// // function Homepage() {
// //     const {theme, switchTheme} = useContext(AppContext);

// //     const scrollToTop = () => {
// //         window.scrollTo({
// //             top: 0,
// //             behavior: 'smooth',
// //         });
// //     };

// //     return (
// //         <div className="bg-gray-50 dark:bg-[#101e38]">
// //             <div className="lg:w-[1200px] md:mx-auto h-full border-x border-gray-100 dark:border-gray-800 bg-white dark:bg-[#0e182c]">
// //                 <ToggleTheme switchTheme={switchTheme} />

// //                 {/* Landing */}
// //                 <div className="pb-28 pt-24 sm:pt-28 md:pt-44 flex px-6 md:px-24">
// //                     <div className="self-center">
// //                         <img src={user_info.main.photo} className="rounded-full w-20 mb-6 lg:hidden" />
// //                         <div className="flex gap-2 align-center flex-wrap md:flex-nowrap">
// //                             <div className="lg:w-[80%] text-gray-900 dark:text-gray-100 self-center">
// //                                 <h2 className="text-xl">{user_info.main.role}</h2>
// //                                 <h1 className="font-black mt-3 text-5xl lg:w-[85%]">{user_info.main.name}</h1>
                                
// //                                 <p className="mt-6 dark:text-gray-300 text-base font-light lg:w-[87%] leading-7">{user_info.main.description}</p>

// //                                 <div className="flex gap-2 mt-6">
// //                                     <a href="#projects" className="px-6 py-3 border border-gray-900 dark:border-gray-100 hover:bg-blue-600 transition-all hover:text-gray-100 duration-300">Projects</a>
// //                                     <a href="#contact" className="px-6 py-3 hover:text-blue-600 transition-all duration-300 flex gap-3 hover:gap-4">
// //                                         <span className="self-center">Contact</span>
// //                                         <IoIosArrowForward className="self-center" />
// //                                     </a>
// //                                 </div>

// //                                 {/* <div className="flex mt-8 gap-4">
// //                                     <a href={user_info.socials.facebook} rel="noreferrer" target="_blank" className="text-gray-500 dark:text-gray-300 hover:dark:text-gray-300 hover:text-gray-700 transition-all duration-300"><FaFacebook className="inline-block text-3xl" /></a>
// //                                     <a href={user_info.socials.instagram} rel="noreferrer" target="_blank" className="text-gray-500 dark:text-gray-300 hover:dark:text-gray-300 hover:text-gray-700 transition-all duration-300"><FaInstagram className="inline-block text-3xl" /></a>
// //                                     <a href={user_info.socials.twitter} rel="noreferrer" target="_blank" className="text-gray-500 dark:text-gray-300 hover:dark:text-gray-300 hover:text-gray-700 transition-all duration-300"><FaSquareXTwitter className="inline-block text-3xl" /></a>
// //                                     <a href={user_info.socials.linkedin} rel="noreferrer" target="_blank" className="text-gray-500 dark:text-gray-300 hover:dark:text-gray-300 hover:text-gray-700 transition-all duration-300"><FaLinkedin className="inline-block text-3xl" /></a>
// //                                     <a href={user_info.socials.github} rel="noreferrer" target="_blank" className="text-gray-500 dark:text-gray-300 hover:dark:text-gray-300 hover:text-gray-700 transition-all duration-300"><FaGithub className="inline-block text-3xl" /></a>
// //                                     <a href={`mailto:${user_info.main.email}`} rel="noreferrer" target="_blank" className="text-gray-500 dark:text-gray-300 hover:dark:text-gray-300 hover:text-gray-700 transition-all duration-300"><MdEmail className="inline-block text-3xl" /></a>                     
// //                                 </div> */}
// //                             </div>

// //                             <div className="hidden lg:block w-[480px] self-center">
// //                                 <img className="rounded-[10%] transform rotate-3" src={user_info.main.photo} />
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>

// //                 {/* Projects */}
// //                 <div id="projects" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 md:px-16">
// //                     {
// //                         user_info.projects.map((project, index) => {
// //                             return (
// //                                 <Project key={index} theme={theme} title={project.title} description={project.description} technologies={project.technologies} github={project.github} link={project.link} />
// //                             )
// //                         })
// //                     }
// //                 </div>
// //                 {/* Experience Section */}
// //                 <div id="experience" className="mt-12 pt-12 px-6 md:px-24">
// //                     <h4 className="text-5xl font-bold text-gray-900 dark:text-gray-100">Experience</h4>
// //                     <div className="relative border-l-2 border-blue-500">
// //                         {user_info.experience.map((exp, index) => (
// //                             <ExperienceItem key={index} experience={exp} />
// //                         ))}
// //                     </div>
// //                 </div>                

// //                 {/* Skills & Education */}
// //                 <div className="flex flex-wrap lg:flex-nowrap justify-between gap-12 mt-20 md:px-16">
// //                     {/* Skills */}
// //                     <div>
// //                         <div className="p-6 hover:bg-gray-50 transition-all duration-300 hover:dark:bg-[#101e38] md:rounded-xl">
// //                             <h4 className="text-lg font-medium text-gray-600 dark:text-gray-300">Programming Languages</h4>
// //                             <p className="leading-7 mt-2 text-base font-light text-gray-500 dark:text-gray-300">{user_info.skills.languages.description}</p>
// //                             <img className="w-48 mt-4" src={user_info.skills.languages.image + theme} />
// //                         </div>
// //                         <div className="p-6 hover:bg-gray-50 transition-all duration-300 hover:dark:bg-[#101e38] md:rounded-xl">
// //                             <h4 className="text-lg font-medium text-gray-600 dark:text-gray-300">Frameworks & Libraries</h4>
// //                             <p className="leading-7 mt-2 text-base font-light text-gray-500 dark:text-gray-300">{user_info.skills.frameworks.description}</p>
// //                             <img className="w-48 mt-4" src={user_info.skills.frameworks.image + theme} />
// //                         </div>
// //                         <div className="p-6 hover:bg-gray-50 transition-all duration-300 hover:dark:bg-[#101e38] md:rounded-xl">
// //                             <h4 className="text-lg font-medium text-gray-600 dark:text-gray-300">Tools & Platforms</h4>
// //                             <p className="leading-7 mt-2 text-base font-light text-gray-500 dark:text-gray-300">{user_info.skills.tools.description}</p>
// //                             <img className="w-48 mt-4" src={user_info.skills.tools.image + theme} />
// //                         </div>
// //                     </div>

// //                     {/* Education */}
// //                     <div className="w-full px-2 lg:px-0 lg:w-[70%]">
// //                         <div className="border dark:border-gray-500 p-8 rounded-xl">
// //                             <div className="flex gap-4">
// //                                 <FaLandmark className="self-center text-gray-500 dark:text-gray-300" />
// //                                 <h4 className="text-gray-500 dark:text-gray-300 self-center">Education</h4>
// //                             </div>

// //                             {
// //                                 user_info.education.map((education, index) => {
// //                                     return (
// //                                         <div key={index} className="flex gap-4 mt-8">
// //                                             <img className="h-10 w-10 rounded-full" src={education.image} />
// //                                             <div className="w-full">
// //                                                 <h5 className="font-medium text-gray-600 dark:text-gray-300">{education.school}</h5>
// //                                                 <div className="flex justify-between">
// //                                                     <p className="text-gray-500 dark:text-gray-300 text-xs w-full">{education.degree}</p>
// //                                                     <p className="text-gray-500 dark:text-gray-300 text-right w-[50%] text-xs">{education.year}</p>
// //                                                 </div>
// //                                             </div>
// //                                         </div>
// //                                     )
// //                                 })
// //                             }

                            
// //                         </div>
// //                     </div>
// //                 </div>
                
                

// //                 {/* Contact */}
// //                 <div id="contact" className="mt-12 pt-12 px-6 md:px-24">
// //                     <h4 className="text-5xl font-bold text-gray-900 dark:text-gray-100">{user_info.contact.title}</h4>

// //                     <p className="mt-8 leading-7 text-base text-gray-500 dark:text-gray-300 font-light">{user_info.contact.description}</p>
                
// //                     <div className="mt-12">
// //                         <a href={user_info.socials.facebook} className="flex gap-4 text-gray-500 dark:text-gray-300 hover:dark:text-gray-300  hover:text-gray-700 transition-all duration-300">
// //                             <FaFacebook className="self-center text-lg" />
// //                             <span className="self-center">Follow on Facebook</span>
// //                         </a>
// //                         <a href={user_info.socials.twitter} className="flex gap-4 text-gray-500 dark:text-gray-300 hover:dark:text-gray-300 hover:text-gray-700 transition-all duration-300 mt-4">
// //                             <FaSquareXTwitter className="self-center text-lg" />
// //                             <span className="self-center">Follow on Twitter</span>
// //                         </a>
// //                         <a href={user_info.socials.instagram} className="flex gap-4 text-gray-500 dark:text-gray-300 hover:dark:text-gray-300 hover:text-gray-700 transition-all duration-300 mt-4">
// //                             <FaInstagram className="self-center text-lg" />
// //                             <span className="self-center">Follow on Instagram</span>
// //                         </a>
// //                         <a href={user_info.socials.linkedin} className="flex gap-4 text-gray-500 dark:text-gray-300 hover:dark:text-gray-300 hover:text-gray-700 transition-all duration-300 mt-4">
// //                             <FaLinkedin className="self-center text-lg" />
// //                             <span className="self-center">Follow on Linkedin</span>
// //                         </a>
// //                     </div>

// //                     <hr className="mt-6 w-72 border dark:border-gray-800" />

// //                     <a href={`mailto:${user_info.main.email}`} className="flex mt-6 text-gray-500 dark:text-gray-300 hover:dark:text-gray-300 gap-4 hover:text-gray-700 transition-all duration-30">
// //                         <MdEmail className="self-center text-lg" />
// //                         <span>{ user_info.main.email }</span>
// //                     </a>

// //                     <a href={user_info.socials.telegram} className="flex mt-6 text-gray-500 dark:text-gray-300 hover:dark:text-gray-300 gap-4 hover:text-gray-700 transition-all duration-30">
// //                         <FaTelegramPlane   className="self-center text-lg" />
// //                         <span>Message on Telegram</span>
// //                     </a>
// //                 </div>

// //                 <hr className="mt-12 border border-gray-300 dark:border-gray-700" />
                
// //                 {/* Footer */}
// //                 <footer className="p-4 text-center md:flex justify-between">
// //                     <GitHubButton className="self-center" href="https://github.com/srinivaspavan73" data-color-scheme={theme} data-icon="octicon-star" data-size="large" data-show-count="False" aria-label="Star dsbalico/dsfolio on GitHub">Github</GitHubButton>
// //                     <p className="text-gray-500 self-center mt-2 md:mt-0 dark:text-gray-300 text-sm text-center font-light">{user_info.footer}</p>
// //                     <button onClick={() => scrollToTop()} className="text-gray-500 self-center mt-2 md:mt-0 dark:text-gray-300 mx-auto md:mx-0 text-sm font-light flex gap-2"><FaArrowCircleUp className="self-center" /> Go back to top</button>
// //                 </footer>
// //             </div>
// //         </div>
// //     )
// // }

// // export default Homepage
// import { FaFacebook, FaInstagram, FaTelegramPlane, FaArrowCircleUp   } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { FaSquareXTwitter, FaLinkedin  } from "react-icons/fa6";
// import Project from "../components/Project";
// import { FaLandmark } from "react-icons/fa";
// import user_info from "../data/user_info.js"; 
// import ToggleTheme from "../components/ToggleTheme.jsx";
// import { AppContext } from "../App.jsx";
// import { useContext } from "react";
// import GitHubButton from 'react-github-btn'
// import { IoIosArrowForward } from "react-icons/io";
// import ExperienceItem from '../components/ExperienceItem';
import { FaMobile } from "react-icons/fa";


// function Homepage() {
//     const {theme, switchTheme} = useContext(AppContext);

//     const scrollToTop = () => {
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth',
//         });
//     };

//     return (
//         <div className="bg-gray-50 dark:bg-[#101e38]">
//             <div className="lg:w-[1200px] md:mx-auto h-full border-x border-gray-100 dark:border-gray-800 bg-white dark:bg-[#0e182c]">
//                 <ToggleTheme switchTheme={switchTheme} />

//                 {/* Landing */}
//                 <div className="pb-28 pt-14 sm:pt-18 md:pt-14 flex px-6 md:px-14">
//                     <div className="self-center">
//                         <img src={user_info.main.photo} className="rounded-full w-20 mb-6 lg:hidden" />
//                         <div className="flex gap-2 align-center flex-wrap md:flex-nowrap">
//                             <div className="lg:w-[80%] text-gray-900 dark:text-gray-100 self-center">
//                                 <h2 className="text-xl">{user_info.main.role}</h2>
//                                 <h1 className="font-black mt-3 text-5xl lg:w-[85%]">{user_info.main.name}</h1>
                                
//                                 <p className="mt-6 dark:text-gray-300 text-base font-light lg:w-[87%] leading-7">{user_info.main.description}</p>

//                                 <div className="flex gap-2 mt-6">
//                                     <a href="#projects" className="px-6 py-3 border border-gray-900 dark:border-gray-100 hover:bg-blue-600 transition-all hover:text-gray-100 duration-300">Projects</a>
//                                     <a href="#contact" className="px-6 py-3 border border-gray-900 dark:border-gray-100 hover:text-blue-600 transition-all  duration-300 flex gap-3 hover:gap-4">
//                                         <span className="self-center">Contact</span>
//                                         <IoIosArrowForward className="self-center" />
//                                     </a>
//                                     <a href={user_info.resume.link} download className="px-6 py-3 border border-gray-900 dark:border-gray-100 hover:bg-blue-600 transition-all hover:text-gray-100 duration-300">Resume</a>
//                                 </div>

//                                 {/* <div className="flex mt-8 gap-4">
//                                     <a href={user_info.socials.facebook} rel="noreferrer" target="_blank" className="text-gray-500 dark:text-gray-300 hover:dark:text-gray-300 hover:text-gray-700 transition-all duration-300"><FaFacebook className="inline-block text-3xl" /></a>
//                                     <a href={user_info.socials.instagram} rel="noreferrer" target="_blank" className="text-gray-500 dark:text-gray-300 hover:dark:text-gray-300 hover:text-gray-700 transition-all duration-300"><FaInstagram className="inline-block text-3xl" /></a>
//                                     <a href={user_info.socials.twitter} rel="noreferrer" target="_blank" className="text-gray-500 dark:text-gray-300 hover:dark:text-gray-300 hover:text-gray-700 transition-all duration-300"><FaSquareXTwitter className="inline-block text-3xl" /></a>
//                                     <a href={user_info.socials.linkedin} rel="noreferrer" target="_blank" className="text-gray-500 dark:text-gray-300 hover:dark:text-gray-300 hover:text-gray-700 transition-all duration-300"><FaLinkedin className="inline-block text-3xl" /></a>
//                                     <a href={user_info.socials.github} rel="noreferrer" target="_blank" className="text-gray-500 dark:text-gray-300 hover:dark:text-gray-300 hover:text-gray-700 transition-all duration-300"><FaGithub className="inline-block text-3xl" /></a>
//                                     <a href={`mailto:${user_info.main.email}`} rel="noreferrer" target="_blank" className="text-gray-500 dark:text-gray-300 hover:dark:text-gray-300 hover:text-gray-700 transition-all duration-300"><MdEmail className="inline-block text-3xl" /></a>                     
//                                 </div> */}
//                             </div>

//                             <div className="hidden lg:block w-[480px] self-center">
//                                 <img className="rounded-[10%] transform rotate-3" src={user_info.main.photo} />
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Projects */}
//                 <div id="projects" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 md:px-16">
//                     {
//                         user_info.projects.map((project, index) => {
//                             return (
//                                 <Project key={index} theme={theme} title={project.title} description={project.description} technologies={project.technologies} github={project.github} link={project.link} />
//                             )
//                         })
//                     }
//                 </div>
//                 {/* Experience Section */}
//                 <div id="experience" className="mt-12 pt-12 px-6 md:px-24">
//                     <h4 className="text-5xl font-bold text-gray-900 dark:text-gray-100">Experience</h4>
//                     <div className="relative border-l-2 border-blue-500">
//                         {user_info.experience.map((exp, index) => (
//                             <ExperienceItem key={index} experience={exp} />
//                         ))}
//                     </div>
//                 </div>                

//                 {/* Skills & Education */}
//                 <div className="flex flex-wrap lg:flex-nowrap justify-between gap-12 mt-20 md:px-16">
//                     {/* Skills */}
//                     <div>
//                         <div className="p-6 hover:bg-gray-50 transition-all duration-300 hover:dark:bg-[#101e38] md:rounded-xl">
//                             <h4 className="text-lg font-medium text-gray-600 dark:text-gray-300">Programming Languages</h4>
//                             <p className="leading-7 mt-2 text-base font-light text-gray-500 dark:text-gray-300">{user_info.skills.languages.description}</p>
//                             <img className="w-48 mt-4" src={user_info.skills.languages.image + theme} />
//                         </div>
//                         <div className="p-6 hover:bg-gray-50 transition-all duration-300 hover:dark:bg-[#101e38] md:rounded-xl">
//                             <h4 className="text-lg font-medium text-gray-600 dark:text-gray-300">Frameworks & Libraries</h4>
//                             <p className="leading-7 mt-2 text-base font-light text-gray-500 dark:text-gray-300">{user_info.skills.frameworks.description}</p>
//                             <img className="w-48 mt-4" src={user_info.skills.frameworks.image + theme} />
//                         </div>
//                         <div className="p-6 hover:bg-gray-50 transition-all duration-300 hover:dark:bg-[#101e38] md:rounded-xl">
//                             <h4 className="text-lg font-medium text-gray-600 dark:text-gray-300">Tools & Platforms</h4>
//                             <p className="leading-7 mt-2 text-base font-light text-gray-500 dark:text-gray-300">{user_info.skills.tools.description}</p>
//                             <img className="w-48 mt-4" src={user_info.skills.tools.image + theme} />
//                         </div>
//                     </div>

//                     {/* Education */}
//                     <div className="w-full px-2 lg:px-0 lg:w-[70%]">
//                         <div className="border dark:border-gray-500 p-8 rounded-xl">
//                             <div className="flex gap-4">
//                                 <FaLandmark className="self-center text-gray-500 dark:text-gray-300" />
//                                 <h4 className="text-gray-500 dark:text-gray-300 self-center">Education</h4>
//                             </div>

//                             {
//                                 user_info.education.map((education, index) => {
//                                     return (
//                                         <div key={index} className="flex gap-4 mt-8">
//                                             <img className="h-10 w-10 rounded-full" src={education.image} />
//                                             <div className="w-full">
//                                                 <h5 className="font-medium text-gray-600 dark:text-gray-300">{education.school}</h5>
//                                                 <div className="flex justify-between">
//                                                     <p className="text-gray-500 dark:text-gray-300 text-xs w-full">{education.degree}</p>
//                                                     <p className="text-gray-500 dark:text-gray-300 text-right w-[50%] text-xs">{education.year}</p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     )
//                                 })
//                             }

                            
//                         </div>
//                     </div>
//                 </div>
                
//                 {/* edited start */}
                
                

//                 {/* Contact */}
//                 <div id="contact" className="mt-12 pt-12 px-6 md:px-24">
//                     <h4 className="text-5xl font-bold text-gray-900 dark:text-gray-100">{user_info.contact.title}</h4>

//                     <p className="mt-8 leading-7 text-base text-gray-500 dark:text-gray-300 font-light">{user_info.contact.description}</p>
                
//                     <div className="mt-12">
//                         <a href={user_info.socials.facebook} className="flex gap-4 text-gray-500 dark:text-gray-300 hover:dark:text-gray-300  hover:text-gray-700 transition-all duration-300">
//                             <FaFacebook className="self-center text-lg" />
//                             <span className="self-center">Facebook</span>
//                         </a>
//                         <a href={user_info.socials.twitter} className="flex gap-4 text-gray-500 dark:text-gray-300 hover:dark:text-gray-300 hover:text-gray-700 transition-all duration-300 mt-4">
//                             <FaSquareXTwitter className="self-center text-lg" />
//                             <span className="self-center">Twitter</span>
//                         </a>
//                         <a href={user_info.socials.instagram} className="flex gap-4 text-gray-500 dark:text-gray-300 hover:dark:text-gray-300 hover:text-gray-700 transition-all duration-300 mt-4">
//                             <FaInstagram className="self-center text-lg" />
//                             <span className="self-center">Instagram</span>
//                         </a>
//                         <a href={user_info.socials.telegram} className="flex mt-6 text-gray-500 dark:text-gray-300 hover:dark:text-gray-300 gap-4 hover:text-gray-700 transition-all duration-30">
//                         <FaTelegramPlane   className="self-center text-lg" />
//                         <span>Telegram</span>
//                     </a>
//                     </div>

//                     <hr className="mt-6 w-72 border dark:border-gray-800" />

//                     <a href={`mailto:${user_info.main.email}`} className="flex mt-6 text-gray-500 dark:text-gray-300 hover:dark:text-gray-300 gap-4 hover:text-gray-700 transition-all duration-30">
//                         <MdEmail className="self-center text-lg" />
//                         <span>{ user_info.main.email }</span>
//                     </a>
//                     <a href={user_info.socials.linkedin} className="flex gap-4 text-gray-500 dark:text-gray-300 hover:dark:text-gray-300 hover:text-gray-700 transition-all duration-300 mt-4">
//                             <FaLinkedin className="self-center text-lg" />
//                             <span className="self-center">Connect on Linkedin</span>
//                         </a>

                   
//                 </div>

//                 <hr className="mt-12 border border-gray-300 dark:border-gray-700" />
                
//                 {/* Footer */}
//                 <footer className="p-4 text-center md:flex justify-between">
//                     <GitHubButton className="self-center" href="https://github.com/srinivaspavan73" data-color-scheme={theme} data-icon="octicon-star" data-size="large" data-show-count="False" aria-label="Star dsbalico/dsfolio on GitHub">Github</GitHubButton>
//                     <p className="text-gray-500 self-center mt-2 md:mt-0 dark:text-gray-300 text-sm text-center font-light">{user_info.footer}</p>
//                     <button onClick={() => scrollToTop()} className="text-gray-500 self-center mt-2 md:mt-0 dark:text-gray-300 mx-auto md:mx-0 text-sm font-light flex gap-2"><FaArrowCircleUp className="self-center" /> Go back to top</button>
//                 </footer>
//             </div>
//         </div>
//     )
// }

// export default Homepage


import { FaInstagram, FaTelegramPlane, FaArrowCircleUp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import Project from "../components/Project";
import { FaLandmark } from "react-icons/fa";
import user_info from "../data/user_info.js"; 
import ToggleTheme from "../components/ToggleTheme.jsx";
import { AppContext } from "../App.jsx";
import { useContext } from "react";
import GitHubButton from 'react-github-btn'
import { IoIosArrowForward } from "react-icons/io";
import ExperienceItem from '../components/ExperienceItem';


function Homepage() {
    const {theme, switchTheme} = useContext(AppContext);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-[#0a1628] dark:via-[#101e38] dark:to-[#0a1628]">
            <div className="max-w-7xl mx-auto min-h-screen border-x border-gray-100/50 dark:border-gray-800/50 bg-white/80 dark:bg-[#0e182c]/80 backdrop-blur-sm">
                <ToggleTheme switchTheme={switchTheme} />

                {/* Landing */}
                <section className="pb-20 pt-20 sm:pt-24 md:pt-32 lg:pt-40 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24">
                    <div className="max-w-6xl mx-auto">
                        <img src={user_info.main.photo} alt="Profile" className="rounded-full w-24 h-24 mb-8 object-cover shadow-lg ring-4 ring-gray-100 dark:ring-gray-800 lg:hidden" />
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
                            <div className="flex-1 text-center lg:text-left">
                                <h2 className="text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase mb-3">{user_info.main.role}</h2>
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-gray-100 leading-tight mb-6">{user_info.main.name}</h1>
                                
                                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">{user_info.main.description}</p>

                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                                    <a href="#projects" className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white bg-gray-900 dark:bg-white dark:text-gray-900 border-2 border-gray-900 dark:border-white rounded-lg hover:bg-blue-600 hover:border-blue-600 dark:hover:bg-blue-500 dark:hover:border-blue-500 dark:hover:text-white transition-all duration-300 shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
                                        Projects
                                    </a>
                                    <a href="#contact" className="group inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-gray-900 dark:text-gray-100 bg-transparent border-2 border-gray-900 dark:border-gray-100 rounded-lg hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
                                        <span>Contact</span>
                                        <IoIosArrowForward className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                    </a>
                                    <a href={user_info.resume.link} download className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-gray-900 dark:text-gray-100 bg-transparent border-2 border-gray-900 dark:border-gray-100 rounded-lg hover:bg-blue-600 hover:border-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
                                        Resume
                                    </a>
                                </div>
                            </div>

                            <div className="hidden lg:block flex-shrink-0 w-80 xl:w-96">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-3xl rotate-3 opacity-20 blur-xl"></div>
                                    <img className="relative rounded-3xl transform rotate-3 shadow-2xl hover:rotate-0 transition-transform duration-500 object-cover w-full ring-4 ring-white dark:ring-gray-800" src={user_info.main.photo} alt="Profile" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects */}
                <section id="projects" className="py-16 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 bg-gray-50/50 dark:bg-gray-900/20">
                    <div className="max-w-6xl mx-auto">
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-gray-100 mb-12 text-center lg:text-left">Featured Projects</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {
                                user_info.projects.map((project, index) => {
                                    return (
                                        <Project key={index} theme={theme} title={project.title} description={project.description} technologies={project.technologies} github={project.github} link={project.link} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>

                {/* Experience Section */}
                <section id="experience" className="py-16 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24">
                    <div className="max-w-6xl mx-auto">
                        <h4 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-gray-100 mb-12">Experience</h4>
                        <div className="relative border-l-2 border-blue-500 dark:border-blue-400 pl-2">
                            {user_info.experience.map((exp, index) => (
                                <ExperienceItem key={index} experience={exp} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Skills & Education */}
                <section className="py-16 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 bg-gray-50/50 dark:bg-gray-900/20">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                            {/* Skills */}
                            <div className="space-y-6">
                                <div className="group p-8 bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-300">
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">Programming Languages</h4>
                                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 mb-5">{user_info.skills.languages.description}</p>
                                    <img className="w-52 h-auto" src={user_info.skills.languages.image + theme} alt="Programming Languages" />
                                </div>
                                <div className="group p-8 bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-300">
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">Frameworks & Libraries</h4>
                                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 mb-5">{user_info.skills.frameworks.description}</p>
                                    <img className="w-52 h-auto" src={user_info.skills.frameworks.image + theme} alt="Frameworks" />
                                </div>
                                <div className="group p-8 bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-300">
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">Tools & Platforms</h4>
                                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 mb-5">{user_info.skills.tools.description}</p>
                                    <img className="w-52 h-auto" src={user_info.skills.tools.image + theme} alt="Tools" />
                                </div>
                            </div>

                            {/* Education */}
                            <div className="lg:sticky lg:top-8 h-fit">
                                <div className="bg-white dark:bg-gray-800/50 border-2 border-gray-200 dark:border-gray-700 p-8 lg:p-10 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
                                            <FaLandmark className="text-2xl text-blue-600 dark:text-blue-400" />
                                        </div>
                                        <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Education</h4>
                                    </div>

                                    <div className="space-y-6">
                                        {
                                            user_info.education.map((education, index) => {
                                                return (
                                                    <div key={index} className="flex gap-5 p-5 rounded-xl bg-gray-50 dark:bg-gray-900/30 hover:bg-gray-100 dark:hover:bg-gray-900/50 transition-colors duration-300">
                                                        <img className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-200 dark:ring-gray-700 flex-shrink-0" src={education.image} alt={education.school} />
                                                        <div className="flex-1 min-w-0">
                                                            <h5 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-1.5">{education.school}</h5>
                                                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{education.degree}</p>
                                                            {education.year && <p className="text-xs text-gray-500 dark:text-gray-500">{education.year}</p>}
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact */}
                <section id="contact" className="py-16 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24">
                    <div className="max-w-4xl mx-auto">
                        <h4 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-gray-100 mb-8">{user_info.contact.title}</h4>

                        <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300 font-light mb-12 max-w-2xl">{user_info.contact.description}</p>
                    
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                            {/* <a href={user_info.socials.facebook} className="group flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
                                <FaFacebook className="text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                                <span className="font-medium">Facebook</span>
                            </a> */}
                            <a href={user_info.socials.twitter} className="group flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
                                <FaSquareXTwitter className="text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                                <span className="font-medium">Twitter</span>
                            </a>
                            <a href={user_info.socials.instagram} className="group flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
                                <FaInstagram className="text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                                <span className="font-medium">Instagram</span>
                            </a>
                            <a href={user_info.socials.telegram} className="group flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
                                <FaTelegramPlane className="text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                                <span className="font-medium">Telegram</span>
                            </a>
                            <h href={user_info.socials.Mobile} className="group flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
                                <FaMobile className="text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                                <span className="font-medium">8555866173</span>
                            </h>

                        </div>

                        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent mb-10"></div>

                        <div className="space-y-4">
                            <a href={`mailto:${user_info.main.email}`} className="group flex items-center gap-4 p-5 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-blue-200 dark:border-blue-800 text-gray-700 dark:text-gray-300 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
                                <MdEmail className="text-2xl text-blue-600 dark:text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-100" />
                                <span className="font-medium break-all">{user_info.main.email}</span>
                            </a>
                            <a href={user_info.socials.linkedin} className="group flex items-center gap-4 p-5 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-200 dark:border-blue-800 text-gray-700 dark:text-gray-300 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
                                <FaLinkedin className="text-2xl text-blue-600 dark:text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-100" />
                                <span className="font-medium">Connect on Linkedin</span>
                            </a>
                        </div>
                    </div>
                </section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
                
                {/* Footer */}
                <footer className="py-8 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center">
                            <GitHubButton className="self-center" href="https://github.com/srinivaspavan73" data-color-scheme={theme} data-icon="octicon-star" data-size="large" data-show-count="False" aria-label="Star dsbalico/dsfolio on GitHub">Github</GitHubButton>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm text-center font-light">{user_info.footer}</p>
                        <button onClick={scrollToTop} className="group inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-lg px-4 py-2">
                            <FaArrowCircleUp className="text-lg group-hover:-translate-y-1 transition-transform duration-300" />
                            <span>Go back to top</span>
                        </button>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Homepage