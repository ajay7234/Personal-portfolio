import {
  HTML,
  CSS,
  Github,
  Git,
  Vite,
  TailwindCSS,
  react,
  Python,
  Javascript,
  CPP,
  C,
  Vue,
  Node,
  Nest,
  Next,
  Typescript,
  Express,
  Mongodb,
  Aws,
  Socketio
} from "../constants/Constant";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "./Img_prop";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="EXPERIENCE p-5 container mx-auto mb-10  font-['Poppins']  max-sm:p-2">
        <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center max-sm:text-4xl ">
          SKILLS
        </h1>
        <div
          className="IMG grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-y-10 gap-4 max-sm:p-2 mt-[70px]"
          data-aos="zoom-out-up"
        >
          <Image img={HTML}></Image>
          <Image img={CSS}></Image>
          <Image img={TailwindCSS}></Image>
          <Image img={Javascript}></Image>
          <Image img={Typescript}></Image>
          <Image img={react}></Image>
          <Image img={Next}></Image>
          <Image img={Node}></Image>
          <Image img={Nest}></Image>
          <Image img={Express}></Image>
          <Image img={Mongodb}></Image>
          <Image img={Socketio}></Image>
          <Image img={Aws}></Image>
          <Image img={Git}></Image>
          <Image img={Github}></Image>
        </div>
      </section>
    </>
  );
};
export default Skills;
