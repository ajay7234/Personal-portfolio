const Exp_prop = (props) => {
  return (
    <>
      <div className="shadow-2xl rounded-md bg-[#fff] dark:bg-[#19bad614] sm:p-8 p-4 hover:bg-gradient-to-tl from-[#e1e1e1] to-[#fff] dark:from-[#00040F] dark:to-[#0B274C] transition-box cursor-pointer">
        <div className="HEADER flex sm:flex-row flex-col sm:gap-0 gap-3">
          <div className=" max-w-[80px] sm:pr-3 mr-3">
            <img src={props.img} alt="" />
          </div>

          <div className="">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r inline from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200 text-2xl tracking-wide font-semibold ">
              {props.title}
            </h1>
            <p className="text-[#00040f] dark:text-white text-lg my-2 ">
              {props.subtitle}
            </p>
            <p className="italic text-sm text-[#ccc] dark:text-slate-300">
              {props.date}
            </p>
          </div>
        </div>
        <p className="text-sm text-[#ccc] dark:text-slate-300 mt-5 p-2 leading-8">
          {props.para}
        </p>
        {props?.keyPoints && 
        <p className="text-sm text-[#ccc] dark:text-slate-300 mt-3 p-0 leading-10">
        Key Responsibilities:
        <br/>
        {props?.keyPoints?.length &&
          props?.keyPoints.map((e, i) => (
            <span className="text-sm pl-1" key={i}>
              {i + 1}. {e}
              <br />
            </span>
          ))}
      </p>
        }
        
      </div>
    </>
  );
};
export default Exp_prop;
