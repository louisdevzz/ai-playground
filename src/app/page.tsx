"use client"
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Siderbar from "@/components/Siderbar"
import { useEffect, useState } from "react";

export default function Home() {
  const [input, setInput] = useState<string|null>(null)
  const [finalInput,setFinalInput] = useState<boolean>(false)
  const [isInput, setIsInput] = useState<boolean>(false)
  const [windowSize, setWindowSize] = useState<any>({
    width: null,
    height: null
  });

  const sendInput = ()=>{
    if(input){
      localStorage.setItem("inputText",input as string)
      setFinalInput(true)
      setInput(null)
      setIsInput(false)
    }
  }

  useEffect(() => {
      function handleResize() {
          setWindowSize({
              width: window.innerWidth as number,
              height: window.innerHeight as number,
          });
      }
      window.addEventListener("resize", handleResize);
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
  }, []); 
  
  return (
    <div className="flex flex-col md:flex-row gap-5 w-full">
      {
        windowSize?.width > 768 &&(
          <Siderbar/>
        )
      }
      {
        windowSize?.width <= 768 &&(
          <Navbar/>
        )
      }
      <div className="flex w-full relative justify-center">
        {
          finalInput?(
            <Container/>
          ):(
            <div className="md:px-20 md:py-10 px-5 flex flex-col gap-3 relative">
              <div className="flex flex-col gap-5 items-center md:max-w-3xl text-center mt-3 md:mt-28">
                <img width={60} src="/assets/logo.png" alt="logo" />
                <span className="text-xl">Rubric Application Screening</span>
                <p className="text-sm text-gray-500 md:text-xs">Automate the evaluation of applications with a customizable rubric for fair and accurate scoring. Easily deploy your own criteria and view real-time calculations during assessments. </p>
                <div className="flex flex-row gap-3 items-start border border-gray-200 p-2 rounded-lg shadow-sm">
                  <span className="text-sm text-gray-500 md:text-xs">Start by entering your evaluation criteria below!</span>
                  <img width={20} src="/assets/quotes.svg" alt="icon" />
                </div>
              </div>
            </div>
          )
        }
        
        <div className="fixed bottom-5 px-5 md:px-0 md:max-w-6xl w-full z-20">
            <div className={`flex ${isInput?"flex-col w-full float-start":"flex-row"} border border-gray-200 bg-white rounded-lg md:rounded-2xl shadow-sm md:p-3 px-2 py-1 items-center`}>
              {
                isInput?(
                  <textarea onChange={(e)=>setInput(e.target.value)} value={input?input:""} className="p-2 w-full outline-none resize-none h-20 md:h-32 border-b border-gray-200" placeholder="Input your evaluation criterria"/>
                ):(
                  <p onClick={()=>setIsInput(true)} className="w-full text-gray-400 md:text-base text-xs">Input your evaluation criterria</p>
                )
              }
              <div className={`flex flex-row gap-2 ${isInput&&"w-full float-start mt-2 justify-between"}`}>
                {
                  isInput &&(
                    <div className={`flex flex-row gap-5 px-2 ${!isInput&&"border-r border-gray-200"}`}>
                      {
                        isInput&&(
                          <div className="flex flex-row gap-2 bg-gray-100 p-2 rounded-lg items-center shadow-sm">
                            <img width={15} src="/assets/library.svg" alt="icon" />
                            <span className="md:text-base text-xs">Library</span>
                          </div>
                        )
                      }
                      <button>
                        <img width={isInput?20:25} src="/assets/paperclip.svg" alt="icon" />
                      </button>
                      <button>
                        <img width={isInput?20:25} src="/assets/microphone.svg" alt="icon" />
                      </button>
                      <button>
                        <img width={isInput?20:25} src="/assets/photo.svg" alt="icon" />
                      </button>
                      <button>
                        <img width={isInput?20:25} src="/assets/grid.svg" alt="icon" />
                      </button>
                    </div>
                  )
                }
                {
                  isInput?(
                    <div className="flex flex-row gap-4 p-2 px-3 items-center justify-center rounded-xl bg-[#0969DA] w-24">
                      <button onClick={()=>sendInput()}>
                        <img width={15} src="/assets/telegram.svg" alt="icon" />
                      </button>
                      <div className="w-0.5 h-full bg-gray-200"/>
                      <button onClick={()=>setIsInput(false)}>
                        <img width={15} src="/assets/arrow-down.svg" alt="icon" />
                      </button>
                    </div>
                  ):(
                    <button className="md:p-3 p-2 rounded-lg md:rounded-xl bg-[#0969DA]">
                      <img width={20} src="/assets/telegram.svg" alt="icon" />
                    </button>
                  )
                }
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
