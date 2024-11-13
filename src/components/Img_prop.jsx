const Img_prop = ({ img }) => {
  return (
    <>
    <div className="flex justify-center">
      <div className="w-[100px] h-[100px] shadow-xl shadow-slate-300 dark:shadow-lg dark:shadow-blue-500/50 bg-gradient-to-bl from-[#ccc] to-[#eee] dark:from-[#051937] dark:to-[#222] rounded-full place-content-center grid">
        <img src={img} alt="html" className="max-sm:h-[45px] h-[55px] " />
      </div>
    </div>
    </>
  );
};
export default Img_prop;
