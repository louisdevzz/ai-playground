import { useEffect, useState } from "react";

const Container = () =>{
    const [valueInput,setValueInput] = useState<string|null>(null);

    useEffect(()=>{
        if(localStorage.getItem("inputText")){
            setValueInput(localStorage.getItem("inputText"))
        }
    },[])

    return(
        <div className="flex flex-row justify-start w-full px-5 md:px-36 py-0 md:py-10 md:max-h-[52rem] md:pb-0 pb-20  overflow-y-auto">
            <div className="flex flex-row gap-2 w-full">
                <img width={20} className="w-8 h-8 rounded-full" src="/assets/avatar.png" alt="avatar" />
                <div className="flex flex-col w-full">
                    <div className="flex flex-row gap-2 items-center">
                        <span>louisdevzz.near</span>
                        <small>2:45 PM</small>
                    </div>
                    <div className="flex flex-col mt-3">
                        <div className="text-gray-600" dangerouslySetInnerHTML={{__html: valueInput as string}} />
                    </div>
                    <div className="md:mt-20 mt-10 border border-gray-200 rounded-lg shadow-sm flex flex-col gap-2 p-4 md:p-10 md:w-[70%] items-start">
                        <div className="flex flex-row items-center gap-3">
                            <img width={40} className="p-2 rounded-full border border-gray-100 shadow-sm" src="/assets/logo.png" alt="logo" />
                            <span className="font-semibold">Researching</span>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="flex flex-row gap-3">
                                <div className="flex flex-col items-center">
                                    <img width={20} src="/assets/check.svg" alt="icon" />
                                    <div className="w-0.5 h-full bg-gray-300"/>
                                </div>
                                <div className="border-b border-gray-200 py-5 w-full">
                                    <span className="text-gray-400">Analyzing user input....</span>
                                </div>
                            </div>
                            <div className="flex flex-row gap-3">
                                <div className="flex flex-col items-center">
                                    <img width={20} src="/assets/check.svg" alt="icon" />
                                    <div className="w-0.5 h-full bg-gray-100"/>
                                </div>
                                <div className="border-b border-gray-200 py-5 w-full">
                                    <span className="text-gray-400">Identifying key criteria....</span>
                                </div>
                            </div>
                            <div className="flex flex-row gap-3">
                                <div className="flex flex-col items-center">
                                    <img width={20} src="/assets/check.svg" alt="icon" />
                                    <div className="w-0.5 h-full bg-gray-100"/>
                                </div>
                                <div className="border-b border-gray-200 py-5 w-full">
                                    <span className="text-gray-400">Assign weights to criteria.....</span>
                                </div>
                            </div>
                            <div className="flex flex-row gap-3">
                                <div className="flex flex-col items-center">
                                    <img width={20} src="/assets/check.svg" alt="icon" />
                                    <div className="w-0.5 h-full bg-gray-100"/>
                                </div>
                                <div className="border-b border-gray-200 py-5 w-full">
                                    <span className="text-gray-400">Generate scoring descriptions....</span>
                                </div>
                            </div>
                            <div className="flex flex-row gap-3">
                                <div className="flex flex-col items-center">
                                    <img width={20} src="/assets/check.svg" alt="icon" />
                                    <div className="w-0.5 h-full bg-gray-100"/>
                                </div>
                                <div className="py-5 w-full">
                                    <span className="text-gray-400">Compile the final rubric...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Container;