const CrlnGlitch = () => {
  return (
    <div className="relative sliderContent h-[100%] md:border-x-2 border-black">
      <input
        type="range"
        min="0"
        max="100"
        className="slider z-50 absolute w-[100%] inset-0 opacity-0 cursor-pointer"
      />
      <div className="relative ease-in-out transition-all top-0 left-0 flex flex-row gap-0 w-[100%] h-[100%] items-center justify-star">
        <div className="firstHalf ease-in-out transition-all pointer-events-none absolute w-[50%] h-[100%] overflow-hidden">
          <div className=" pointer-events-none ease-in-out transition-all absolute h-[100%] flex flex-col justify-center items-center text-black gap-3 leftPart">
            <div className="gap-5 flex flex-row items-center justify-center">
              <div className="firstWord flex flex-row items-center justify-center"></div>
              <div className="secondWord flex flex-row items-center justify-center"></div>
            </div>
            <h2 className="subheadline font-thin text-xl  md:text-4xl">
              Branding Managed?
            </h2>
          </div>
        </div>
        <div className="secondHalf ease-in-out transition-all absolute w-[100%] h-[100%] overflow-hidden">
          <div className="pointer-events-none ease-in-out transition-all rightPart absolute  h-[100%] flex flex-col justify-center items-center text-black gap-3">
            <h1 className="font-degular font-bold text-[3rem] md:text-[7rem] leading-none">
              Circle Line
            </h1>
            <h2 className="font-degular font-thin text-xl  md:text-4xl">
              Branding Managed
            </h2>
          </div>
        </div>
        <div className=" sliderLine ease-in-out transition-all absolute z-50 inset-0 w-1 h-[100%] bg-black left-[50%] -translate-x-[50%]"></div>
        <div className="sliderButton ease-in-out transition-all pointer-events-none border-2 border-black absolute z-50 w-12 left-[50%] -translate-x-[50%] top-[75%] p-4 bg-slate-50 rounded-full">
          <svg
            viewBox="0 0 32 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.20648e-06 16.0339C7.65618e-07 26.1197 6.87899 32.0161 16.1019 32.0161C25.3248 32.0161 32 25.8611 32 16.0339C32 6.2584 25.3248 -2.9178e-07 16.1019 -6.94927e-07C6.87899 -1.09807e-06 1.64961e-06 5.89634 1.20648e-06 16.0339ZM6.57325 16.0339C6.57325 10.2927 10.3949 7.44801 16.1529 7.44801C21.1975 7.44801 25.3758 10.3445 25.3758 16.0339C25.3758 21.7234 21.1975 24.6198 16.1529 24.6198C10.3949 24.6198 6.57325 21.7751 6.57325 16.0339Z"
              fill="black"
            />
            <path
              d="M31.949 41L31.949 33.914L0.713379 33.914L0.713379 41L31.949 41Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default CrlnGlitch
