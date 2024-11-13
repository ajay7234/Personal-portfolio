import Lottie from "lottie-react";
import computer from "../assets/lottie/computer.json";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="p-5 container mx-auto mb-10 font-medium font-['Poppins'] max-sm:p-2"
      >
        <div className="WRAPPER sm:mt-[120px] mt-[80px] flex max-sm:flex-col gap-5 justify-between items-center">
          <div className="INTRO lg:text-[70px] sm:text-[50px] text-[40px] lg:leading-[80px] font-semibold sm:leading-[50px] max-sm:font-semibold">
            <h3 className="text-[#00040f] dark:text-white">
              Hi, there! <br />I am <span className="bg-clip-text text-transparent bg-gradient-to-r  from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200">
                Ajay Patil
              </span>
            </h3>
            <p className="ABOUT text-xl max-sm:text-[15px] bg-clip-text text-transparent  bg-gradient-to-r  from-[#00040f] to-slate-500 dark:from-slate-500 dark:to-slate-200 max-w-[550px] mt-5 pl-1">
              Programming enthusiast who often thinks about developing new
              things for solving real world problems.
            </p>
          </div>

          <Lottie
            animationData={computer}
            loop={true}
            className="max-w-[650px]"
          />
        </div>
      </section>
    </>
  );
};
export default About;
