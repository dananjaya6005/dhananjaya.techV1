import notJustDevHack2023 from '../image/notJusrDev2023Hack.jpg';


export default function Hack() {
  return (
    <>
  
      <div
        className="w-full min-h-screen h-full bg-gradient-to-b from-white via-purple-100 to-pink-100 
   dark:bg-gradient-to-b dark:from-[#0F172A] dark:via-[#0f212a] dark:to-[#121a38]
   m-0 p-10
   dark:bg-[#0F172A] "
      >
        <div
          className="w-[97%] h-fit bg-slate-100  m-5 max-[800px]:w-full max-[800px]:m-auto 
                max-[800px]:my-5
                   rounded-xl shadow-md p-5 dark:bg-slate-800  z-10 relative bg-opacity-50 dark:bg-opacity-50"
        >
          <div className="flex flex-row">
            <div></div>
            <div className="flex flex-col align-left ml-4 ">
              <h4 className="text-xl font-bold text-gray-700 dark:text-gray-100 2xl:text-2xl ">
                The hackathon theme : Local Community Support 2023
              </h4>
              <h5 className="text-sm  dark:text-gray-200 2xl:text-base ">
                www.notjust.dev
              </h5>
            </div>
          </div>
          <div className="flex flex-col align-right ml-4 m-2">
            <p className="text-sm  text-gray-800  dark:text-gray-200 ">
              Project Link :{" "}
              <a className='text-indigo-300' href="https://github.com/dananjaya6005/Rocket_Rush">
                Click Here
              </a>
            </p>
          </div>
          <img src={notJustDevHack2023} className="w-[50%] rounded-lg my-3 max-[500px]:w-[75%] " />
        </div>
        
      </div>
    </>
  );
}
