"use client";

import Exp_prop from "./Exp_prop";
import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import IIIT_KOTA from "../assets/GTULogo.png";

import {
  Hackthechain,
  GSSOC,
  IITB,
  Sports,
  IIITians,
  GDSC,
  KDE,
  Oppia,
} from "../constants/Constant";

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const keyPart1 = [
    "Frontend and Backned Development", 
    "Deployment and DevOps", 
    "Client Communication", 
    "Collaboration and Teamwork",  
    "Project Management"
  ]

  const keyPart2 = [
    "Frontend Development", 
    "Backned Development",
    "Collaboration and Teamwork",  
  ]

  return (
    <>
      <section
        id="experience"
        className="p-5 container mx-auto mb-10 font-medium font-['Poppins'] max-sm:p-2"
      >
        <div className="WRAPPER mt-12 ">
          <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold sm:text-5xl text-[30px] text-center">
            EXPERIENCE
          </h1>

          <div
            className="EXPERIENCE mt-16 grid sm:gap-10 gap-6 xl:grid-cols-3"
            data-aos="zoom-in-up"
          >
            <Exp_prop
              img={Oppia}
              title="Globalia Soft LLP"
              subtitle="Full stack developer"
              date="Full-time Oct 2021 to Present (3 years)"
              para="- As a Full Stack Developer, I have successfully delivered multiple client-based projects, leveraging a diverse tech stack and deploying robust applications on various cloud platforms. My role involved end-to-end development, deployment, and client communication to ensure project success." 
              keyPoints={keyPart1}
            />
            <Exp_prop
              img={KDE}
              title="Goldenmace it solutions"
              subtitle="Web developer"
              date="Full-time Nov 2020 to May 2021 (7 months)"
              para="- As a Web Developer, I developed robust web pages and applications using Javascript, React and Nodejs and managed databases with MySQL and MongoDB to create efficient server-side solutions. I collaborated with UI/UX designers to build responsive, user-friendly interfaces, ensuring a seamless device experience."
              keyPoints={keyPart2}
            />
              <Exp_prop
              img={KDE}
              title="T-SQUARE Info tech "
              subtitle="Software Developer(Internship)"
              date="Full-time Aug 2019 to Jan 2020 (6 months)"
              para="- During Internship, I gained hands-on experience in developing applications using various programming languages, including Android, PHP, and MySQL. I worked on applying my knowledge to create and deploy several projects, focusing on end-to-end development processes. This involved building dynamic applications using Android for mobile development, PHP for backend server-side scripting, and MySQL for database management "
            />
          </div>
        </div>
      </section>
      <Skills></Skills>
    </>
  );
};
export default Experience;
