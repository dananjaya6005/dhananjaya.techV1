import { useRef } from "react";
import myimage from "../../src/image/newdpweb.jpg";
import post from "../../src/post.json";

const tags = [
  { name: "React Native" },
  { name: "React" },
  { name: "Typescript" },
  { name: "Node js" },
  { name: "MongoDB" },
  { name: "Graphql" },
  { name: "Tailwind CSS" },
  { name : 'Next js'},
  { name : 'Remix js '}
];

export default function Home() {
  const divRef = useRef<HTMLDivElement>(null);
  const handleclick = () => {
    divRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div
        className="w-full h-full bg-gradient-to-b from-white via-purple-100 to-pink-100 
       dark:bg-gradient-to-b dark:from-[#0F172A] dark:via-[#0f212a] dark:to-[#121a38]
       m-0 p-10
       dark:bg-[#0F172A] "
      >
        <div className="flex flex-col items-center justify-center  ">
          <div className="flex flex-col items-center justify-center m-1 my-10 ">
            <img src={myimage} className="w-60 h-auto rounded-full" />
            <h1
              className="text-4xl font-bold text-gray-600 dark:text-gray-400 m-1 text-center
            2xl:text-5xl
             max-[600px]:text-2xl my-6 "
            >
              Explore my collection of software projects
            </h1>
            <h2
              className=" text-center text-xl font-bold text-gray-600 dark:text-gray-400 
            font-mono w-2/3   
             max-[600px]:text-base 
             max-[600px]:w-11/12
             max-[800px]:w-11/12"
            >
              Discover my journey in software development as I explore the world
              of mobile and web app development using React Native. Follow along
              as I learn and grow my skills in frontend and backend handling,
              and see the exciting projects I’m working on.
            </h2>
          </div>
        </div>

        <div className="flex-wrap flex justify-center">
          {tags.map((tag) => {
            return (
              <div
                className={`flex items-center justify-center w-24 h-8 m-2 rounded-md
                 
                 bg-rose-500 text-white dark:bg-yellow-600`}
              >
                <h1 className="text-xs font-bold">{tag.name}</h1>
              </div>
            );
          })}
        </div>

        <div className=" my-4 items-center flex justify-center ">
          <button
            onClick={handleclick}
            type="button"
            className="max-[800px]:px-3  text-gray-900 mr-10 bg-white  hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
          >
            🐯 Get Started
          </button>
          
          <a href="">
          <button  
            onClick={() => {
              window.open(
                "https://raw.githubusercontent.com/dananjaya6005/imageUploadForProject/main/resume%20dhananjaya%20chathuranga.pdf"
              );
            }}
            type="button"
            className="text-gray-900  bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
          >
            🚀 View Resume
          </button>
          </a>
        </div>
        <div className="" ref={divRef}>
          <div className="flex flex-wrap justify-center max-[800px]:flex-col">
            {post.map((post) => {
              return (
                <div
                  className="w-[27%] h-fit bg-slate-100  m-5 max-[800px]:w-full max-[800px]:m-auto 
                max-[800px]:my-5
                   rounded-xl shadow-md p-5 dark:bg-slate-800  z-10 relative bg-opacity-50 dark:bg-opacity-50"
                >
                  <div className="flex flex-row">
                    <div></div>
                    <div className="flex flex-col align-left ml-4 ">
                      <h4 className="text-xl font-bold text-gray-700 dark:text-gray-100 2xl:text-2xl ">
                        {post.title}
                      </h4>
                      <h5 className="text-sm  dark:text-gray-200 2xl:text-base ">
                        {post.tools}
                      </h5>

                      <img
                        src={post.img}
                        className="w-[95%] rounded-lg my-3 "
                      />
                    </div>
                  </div>
                  <div className="flex flex-col align-right ml-4 m-2">
                    <p className="text-sm  text-gray-800  dark:text-gray-200 ">
                      {post.description}
                    </p>
                  </div>

                  <div className="flex justify-between items-center " >

                  <button
                    type="button"
                    onClick={() => window.open(post.link)}
                    className="py-2 px-5  text-sm font-medium text-gray-900 ml-4 my-2
                  focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100
                   hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700
                dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Read more
                  </button>



                 {
                  post.demoLink && ( post.demoLink.length >0 && (


      
                  <div className="pointer" >
                  <button
                    onClick={() => window.open(post.demoLink)}
                    className="inline-flex items-center   py-1 px-3 bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 text-white rounded-md transition duration-300"
                  >
                    <svg
                      className="w-6 h-6 fill-current mr-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21.9 5.9c-.2-.7-.7-1.2-1.4-1.4C18.3 4 12 4 12 4s-6.3 0-8.5.5c-.7.2-1.2.7-1.4 1.4C2 8.1 2 12 2 12s0 3.9.5 5.1c.2.7.7 1.2 1.4 1.4 2.2.5 8.5.5 8.5.5s6.3 0 8.5-.5c.7-.2 1.2-.7 1.4-1.4.5-1.2.5-5.1.5-5.1s0-3.9-.5-5.1zM9.5 15.5V8.5l6.5 3z" />
                    </svg>
                    <span className="text-sm font-medium text-slate-200" >Demo</span>
                  </button>
                </div>
                    
                  ))

                 }



                  </div>



                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
