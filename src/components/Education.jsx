import Lottie from "lottie-react";
import education from "../assets/lottie/Education.json";
import IIIT_KOTA from "../assets/GTULogo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Education = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="education"
      className="EXPERIENCE p-5 mx-auto mb-10 min-h-screen font-['Poppins']  max-sm:p-2 container"
    >
      <div className="WRAPPER mt-10">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5 max-sm:text-4xl   ">
          Education
        </h1>

        <div
          className="EDUCATION flex gap-7 justify-between lg:flex-row flex-col"
          data-aos="fade-right"
        >
          <Lottie
            animationData={education}
            loop={true}
            className="xl:max-w-[670px] lg:max-w-[500px] shadow-xl rounded-xl border border-[#00040f]"
          />
          <div className="max-w-[650px]">
            <div className="mt-[52px] p-7 max-sm:p-3">
              <div className="flex gap-5">
                <img
                  src={IIIT_KOTA}
                  alt="IIIT KOTA"
                  className="w-[90px] h-[90px]"
                />
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r max-sm:text-[17px] from-amber-500 via-orange-600 to-yellow-500 dark:from-[#ff6600] dark:to-slate-100 font-semibold text-2xl max-w-[400px] tracking-wider ">
                  Gujarat technological university
                </h1>
              </div>

              <div className="mt-7 flex flex-col gap-5 text-left pl-4">
                <h3 className="capitalize  text-slate-800 dark:text-slate-300 text-xl max-sm:text-lg">
                  Bachelor of engineering
                </h3>
                <p className="italic capitalize text-gray-500 dark:text-[#ccc] text-xl max-sm:text-lg leading-9">
                  CGPA:- 7.90 (2017 - 2020)

                </p>

                <p className="capitalize text-gray-500 dark:text-[#ccc] text-xl max-sm:text-lg leading-9">
                  Computer and science engineering
                </p>
              </div>
            </div>

            <div className="mt-[52px] p-7 max-sm:p-3">
              <div className="flex gap-5">
                <img
                  src={IIIT_KOTA}
                  alt="IIIT KOTA"
                  className="w-[90px] h-[90px]"
                />
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r max-sm:text-[17px] from-amber-500 via-orange-600 to-yellow-500 dark:from-[#ff6600] dark:to-slate-100 font-semibold text-2xl max-w-[400px] tracking-wider ">
                  Gujarat technological university
                </h1>
              </div>

              <div className="mt-7 flex flex-col gap-5 text-left pl-4">
                <h3 className="capitalize  text-slate-800 dark:text-slate-300 text-xl max-sm:text-lg">
                  Bachelor of engineering
                </h3>
                <p className="italic capitalize text-gray-500 dark:text-[#ccc] text-xl max-sm:text-lg leading-9">
                  CGPA:- 7.60 (2014 - 2017)

                </p>

                <p className="capitalize text-gray-500 dark:text-[#ccc] text-xl max-sm:text-lg leading-9">
                  Computer engineering
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Education;
