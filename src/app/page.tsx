"use client"
import Siderbar from "@/components/Siderbar"
import { useState } from "react";

export default function Home() {

  const [isInput, setIsInput] = useState<boolean>(false)

  return (
    <div className="flex flex-row gap-5 w-full">
      <Siderbar/>
      <div className="flex w-full relative justify-center">
        <div className="px-20 py-10 flex flex-col gap-3 relative">
          <div className="flex flex-col gap-5 items-center max-w-3xl text-center mt-28">
            <img width={60} src="/assets/logo.png" alt="logo" />
            <span className="text-xl">Rubric Application Screening</span>
            <p className="text-sm text-gray-500">Automate the evaluation of applications with a customizable rubric for fair and accurate scoring. Easily deploy your own criteria and view real-time calculations during assessments. </p>
            <div className="flex flex-row gap-3 items-start border border-gray-200 p-2 rounded-lg shadow-sm">
              <span className="text-sm text-gray-500">Start by entering your evaluation criteria below!</span>
              <img width={20} src="/assets/quotes.svg" alt="icon" />
            </div>
          </div>
          
        </div>
        <div className="fixed bottom-10 max-w-6xl w-full">
            <div onClick={()=>setIsInput(true)} className={`flex ${isInput?"flex-col w-full float-start":"flex-row"} border border-gray-200 rounded-2xl shadow-sm p-3 items-center`}>
              {
                isInput?(
                  <textarea className="p-2 w-full outline-none resize-none h-32 border-b border-gray-200" placeholder="Input your evaluation criterria"/>
                ):(
                  <p className="w-full text-gray-400">Input your evaluation criterria</p>
                )
              }
              <div className={`flex flex-row gap-2 ${isInput&&"w-full float-start mt-2 justify-between"}`}>
                <div className={`flex flex-row gap-5 px-2 ${!isInput&&"border-r border-gray-200"}`}>
                  {
                    isInput&&(
                      <div className="flex flex-row gap-2 bg-gray-100 p-2 rounded-lg items-center shadow-sm">
                        <img width={15} src="/assets/library.svg" alt="icon" />
                        <span>Library</span>
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
                <button className="p-3 rounded-xl bg-[#0969DA]">
                  <img width={isInput?15:25} src="/assets/telegram.svg" alt="icon" />
                </button>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
