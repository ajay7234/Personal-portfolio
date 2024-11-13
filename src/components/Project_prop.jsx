/* eslint-disable react/prop-types */
import { SiGithub } from "react-icons/si";
import { SlLink } from "react-icons/sl";

const Project_prop = (props) => {
  return (
    <>
      <div className=" border-[#00040f] shadow-xl  bg-[#fff] dark:bg-[#19bad614]  dark:border-white border rounded-xl p-7  max-sm:p-3  hover:bg-gradient-to-tl from-[#ccc] to-[#e1e1e1] dark:from-[#00040F] dark:to-[#0B274C]">
        <div className="HEADER">
          <div className="HEADING flex gap-7 max-sm:gap-0 sm:flex-row flex-col">
            <div className=" ">
              <img
                src={props.img}
                alt=""
                className="max-w-[100px] rounded-full border border-[#00040f]"
              />
            </div>
            <div className="">
            <h1 className="font-semibold tracking-wide bg-clip-text text-transparent bg-gradient-to-r p-1 from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200 text-xl mb-2">
              <a href={props.link} target="_blank" rel="noopener noreferrer">
                {props.title}
              </a>
</h1>

              <h3 className="text-[#00040f] dark:text-slate-200 p-1 ">
                Tech Stack
              </h3>

              <div className="flex gap-1 p-1 -translate-x-2">
                {props.html5}
                {props.css3}
                {props?.nextjs}
                {props?.node}
                {props.javascript}
                {props.tailwindcss}
                {props.react}
                {props?.redux}
                {props.vite}
                {props.mongo}
                {props?.dynamodb}
                {props?.backbonejs}
                {props?.aws}
                {props?.s3}
                {props.socket}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  h-96 overflow-y-auto">
          <p className="dark:text-[#ccc] mt-5 text-lg">{props.para}</p>
          <p className="dark:text-[#ccc] mt-5 text-lg">{props.subListDisc}</p>
          {props?.role &&
            props.role.map((ele, index) => (
              <div key={index} className="mb-4">
                <p className="dark:text-[#ccc] mt-5 text-lg font-semibold">
                  {index + 1}) {ele.subproject}
                </p>
                <p className="dark:text-[#ccc] mt-2 text-sm font-medium">
                  {ele.desc}
                </p>
              </div>
            ))}
        </div>

        <div className="flex gap-2 text-[#00040f] dark:text-slate-200 p-2 pl-5 mt-5 text-3xl">
          {/* <a href={props.github_link}>
            <SiGithub />
          </a> */}
          <a href={props.link} target="_blank" rel="noreferrer">
            <SlLink />
          </a>
        </div>
      </div>
    </>
  );
};
export default Project_prop;
