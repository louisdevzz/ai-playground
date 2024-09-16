import { useEffect, useState } from "react";
import Table from "./Table";

const ContainerRubric = () =>{
    const [valueInput,setValueInput] = useState<string|null>(null);

    useEffect(()=>{
        if(localStorage.getItem("inputText")){
            setValueInput(localStorage.getItem("inputText"))
        }
    },[])

    const Data: Data = {
        labels: ["Criteria","Description","Weighting","1 - Poor","2 - Below Average","3 - Average"],
        data:[
            {
                criteria: 'Adherence to Open Source Requirements',
                description: 'Code is available under the GNU Affero GPL v3.0 and includes clear documentation.',
                weighting: 15,
                poor: 'Not open source',
                below_average: 'Some open source files, but no documentation',
                average: 'Open source with minimal documentation'
            },
            {
                criteria: 'Adherence to Open Source Requirements',
                description: 'Code is available under the GNU Affero GPL v3.0 and includes clear documentation.',
                weighting: 15,
                poor: 'Not open source',
                below_average: 'Some open source files, but no documentation',
                average: 'Open source with minimal documentation'
            }
        ]
    }

    return(
        <div className="flex flex-row justify-start w-full px-3 md:px-36 py-0 md:max-h-[45rem] md:pb-0 pb-20 overflow-y-auto">
            <div className="flex flex-row gap-2 w-full">
                <img width={20} className="md:w-8 w-5 h-5 md:h-8 rounded-full" src="/assets/avatar.png" alt="avatar" />
                <div className="flex flex-col w-full relative">
                    <div className="flex flex-row gap-4 items-center">
                        <span>louisdevzz.near</span>
                        <small>2:45 PM</small>
                        <div className="flex flex-row gap-4">
                            <button>
                                <img width={16} src="/assets/pen.svg" alt="icon" />
                            </button>
                            <button>
                                <img width={16} src="/assets/book.svg" alt="icon" />
                            </button>
                            <button>
                                <img width={16} src="/assets/dots.svg" alt="icon" />
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col mt-3 gap-3">
                        {/* <div className="text-gray-600" dangerouslySetInnerHTML={{__html: valueInput as string}} /> */}
                        <span className="font-semibold">Adherence to Open Source Requirements</span>
                        <ul className="text-gray-500 list-disc px-5">
                            <li>Code is open source on firt commit under GNU Affero General Public License v3.0</li>
                            <li>Clear documentation outlining each API endpoint and how to run the agent</li>
                        </ul>
                        <button className="flex flex-row gap-2 p-2 rounded-lg border border-gray-200 shadow-sm max-w-[8rem] justify-center items-center">
                            <span>See more</span>
                            <img width={20} src="/assets/arrow-down-gray.svg" alt="icon" />
                        </button>
                    </div>
                    <div className="md:mt-10 mt-10 border border-gray-200 rounded-lg shadow-sm flex flex-col gap-2 p-3 md:p-10 md:w-[100%] w-[93%] items-start">
                        <div className="flex flex-row items-center gap-3">
                            <img width={40} className="p-2 rounded-full border border-gray-100 shadow-sm" src="/assets/logo.png" alt="logo" />
                            <span className="font-semibold">Comprehensive Rubric Matrix</span>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="flex flex-row gap-3">
                                <div className="flex flex-col items-center">
                                    <img width={20} src="/assets/stick.svg" alt="icon" />
                                    <div className="w-0.5 h-full bg-gray-300"/>
                                </div>
                                <div className="border-b border-gray-200 py-5 w-full">
                                    <span>Analyzing user input</span>
                                </div>
                            </div>
                            <div className="flex flex-row gap-3">
                                <div className="flex flex-col items-center">
                                    <img width={20} src="/assets/stick.svg" alt="icon" />
                                    <div className="w-0.5 h-full bg-gray-100"/>
                                </div>
                                <div className="border-b border-gray-200 py-5 w-full">
                                    <span>Identifying key criteria</span>
                                </div>
                            </div>
                            <div className="flex flex-row gap-3">
                                <div className="flex flex-col items-center">
                                    <img width={20} src="/assets/stick.svg" alt="icon" />
                                    <div className="w-0.5 h-full bg-gray-100"/>
                                </div>
                                <div className="border-b border-gray-200 py-5 w-full">
                                    <span>Assign weights to criteria.</span>
                                </div>
                            </div>
                            <div className="flex flex-row gap-3">
                                <div className="flex flex-col items-center">
                                    <img width={20} src="/assets/stick.svg" alt="icon" />
                                    <div className="w-0.5 h-full bg-gray-100"/>
                                </div>
                                <div className="border-b border-gray-200 py-5 w-full">
                                    <span>Generate scoring descriptions</span>
                                </div>
                            </div>
                            <div className="flex flex-row gap-3">
                                <div className="flex flex-col items-center">
                                    <img width={20} src="/assets/stick.svg" alt="icon" />
                                    <div className="w-0.5 h-full bg-gray-100"/>
                                </div>
                                <div className="py-5 w-full">
                                    <span>Compile the final rubric...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row md:w-full p-3 md:p-5 gap-3 md:gap-5 border border-solid shadow-sm rounded-lg mt-10 w-[93%]">
                        <img width={20} src="/assets/logo.png" className="w-[20px] h-[20px] rounded-full" alt="logo" />
                        <div className="flex flex-col gap-2 pr-5 w-full ">
                        <div className="flex flex-row gap-2 items-center">
                            <span>Proposal Evaluation Agent</span>
                            <span className="text-sm text-gray-500">2:46 PM</span>
                        </div>
                        <span className="text-gray-500 inline-block md:text-base text-xs">Below is your dynamically generated rubric. You can edit the descriptions for each score to clarify what each level represents.</span>
                        <div className="w-full overflow-x-auto text-xs md:text-base">
                            {/* <table className="min-w-full border-collapse border border-gray-300">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="border border-gray-300 px-4 py-2">Criteria</th>
                                    <th className="border border-gray-300 px-4 py-2">Description</th>
                                    <th className="border border-gray-300 px-4 py-2">Weighting (%)</th>
                                    <th className="border border-gray-300 px-4 py-2">1 - Poor</th>
                                    <th className="border border-gray-300 px-4 py-2">2 - Below Average</th>
                                    <th className="border border-gray-300 px-4 py-2">3 - Average</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2">Adherence to Open Source Requirements</td>
                                    <td className="border border-gray-300 px-4 py-2">Code is available under the GNU Affero GPL v3.0 and includes clear documentation.</td>
                                    <td className="border border-gray-300 px-4 py-2">15</td>
                                    <td className="border border-gray-300 px-4 py-2">Not open source</td>
                                    <td className="border border-gray-300 px-4 py-2">Some open source files, but no documentation</td>
                                    <td className="border border-gray-300 px-4 py-2">Open source with minimal documentation</td>
                                </tr>
                                <tr>
                                <td className="border border-gray-300 px-4 py-2">Functionality of Writing Assistant</td>
                                <td className="border border-gray-300 px-4 py-2">Ability to generate writing for prizes and fundraisers, recommends campaign types, and finalizes campaigns.</td>
                                <td className="border border-gray-300 px-4 py-2">20</td>
                                <td className="border border-gray-300 px-4 py-2">No writing generation functionality</td>
                                <td className="border border-gray-300 px-4 py-2">Can generate writing but no campaign recommendations or finalization</td>
                                <td className="border border-gray-300 px-4 py-2">Can generate writing and recommend campaign types with no finalization</td>
                                </tr>
                                <tr>
                                <td className="border border-gray-300 px-4 py-2">Functionality of Search Assistant</td>
                                <td className="border border-gray-300 px-4 py-2">Recommends campaign types, searches based on criteria, returns specified results, and provides error messages.</td>
                                <td className="border border-gray-300 px-4 py-2">15</td>
                                <td className="border border-gray-300 px-4 py-2">No search functionality</td>
                                <td className="border border-gray-300 px-4 py-2">Can search but no recommendations or error messages</td>
                                <td className="border border-gray-300 px-4 py-2">Can search and recommend campaign types but no error messages</td>
                                </tr>
                                <tr>
                                <td className="border border-gray-300 px-4 py-2">Functionality of Funding Assistant</td>
                                <td className="border border-gray-300 px-4 py-2">	Allows users to select campaigns, checks sufficient funds, and informs users about voting rights.</td>
                                <td className="border border-gray-300 px-4 py-2">15</td>
                                <td className="border border-gray-300 px-4 py-2">No funding functionality</td>
                                <td className="border border-gray-300 px-4 py-2">Can select campaigns but no fund checking or voting rights info</td>
                                <td className="border border-gray-300 px-4 py-2">Can select campaigns and check funds but no voting rights info</td>
                                </tr>
                                <tr>
                                <td className="border border-gray-300 px-4 py-2">Adherence to viaPrize Contracts and API</td>
                                <td className="border border-gray-300 px-4 py-2">Correct interaction with viaPrize contracts and effective use of the viaPrize API.</td>
                                <td className="border border-gray-300 px-4 py-2">20</td>
                                <td className="border border-gray-300 px-4 py-2">No interaction with contracts or API</td>
                                <td className="border border-gray-300 px-4 py-2">Some interaction with contracts or API but not effective</td>
                                <td className="border border-gray-300 px-4 py-2">Can interact with contracts and API but with issues</td>
                                </tr>
                            </tbody>
                            </table> */}
                            <Table data={Data}/>
                        </div>
                        <p className="mt-4 text-gray-600 text-sm">
                            Click on the <span className="text-violet-500">“coLumns”</span> or <span className="text-red-500">“rows” </span> to review and edit the rubric. Once you're satisfied, type the command <code className="text-blue-600">/deploy</code> to initiate the deployment process.
                            </p>
                            <div className="flex flex-row gap-20 md:gap-0 md:justify-between">
                                <div className="flex flex-row gap-2">
                                    <img width={16} src="/assets/relay.svg" alt="relay" />
                                    <img width={16} src="/assets/copy.svg" alt="copy" />
                                    <img width={25} src="/assets/share.svg" alt="share" />
                                    <img width={14} src="/assets/save.svg" alt="save" />
                                </div>
                                <div className="flex flex-row gap-2 p-2 bg-gray-100 rounded-lg">
                                    <img width={16} src="/assets/pen.svg" alt="pen" />
                                    <span className="text-sm">Edit Rubric</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ContainerRubric;