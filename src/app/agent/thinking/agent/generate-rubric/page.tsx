"use client"
import Siderbar from "@/components/Siderbar"
import { useState } from "react";

export default function Home() {
  const [isInput, setIsInput] = useState<boolean>(false)
  return (
    <div className="flex flex-row  w-full">
      <Siderbar/>
      <div className="flex flex-col w-full gap-10 ">
        <div className="flex flex-row w-full items-center justify-between p-5 border-b border-solid ">
          <span>Rubric Application Screening/ ViaPrize Campaign</span>
          <div className="flex gap-1">
            <img width={18} src="/assets/settings.svg" alt="setting" />
            <img width={18} src="/assets/trash.svg" alt="trash" />
            <img width={18} src="/assets/archive.svg" alt="archive" />
          </div>
        </div>
        <div className="flex flex-col gap-10 p-10 justify-start items-start">
          <div className="flex flex-row gap-2">
            <img width={20} src="/assets/logo.png" className="w-[20px] h-[20px] rounded-full " alt="logo" />
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-2">
                <span className="text-sm pr-2 border-r">amichael.near</span>
                <div className="flex flex-row gap-4">
                  <span className="text-sm text-gray-500">2:45 PM</span>
                  <img width={15} src="/assets/pen.svg" alt="pen" />
                  <img width={15} src="/assets/book.svg" alt="book" />
                  <img width={15} src="/assets/dots.svg" alt="dots" />
                </div>
              </div>
              <div className="flex flex-col justify-start gap-4"> 
                  <span className="text-gray-500 font-bold">Adherence to Open Source Requirements</span>
                  <ul className="text-gray-400 px-5 list-disc">
                    <li>Code is open source on first commit under GNU Affero General Public License v3.0</li>
                    <li>Clear documentation outlining each API endpoint and how to run the agent</li>
                  </ul>
                </div>
              <div className="flex justify-center max-w-[120px] py-1 rounded-lg gap-2 border shadow-md">
                <span className="text-gray-400 text-sm">See more</span>
                <img width={23} src="/assets/arrow-down.svg" alt="arrow-down" />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full px-3  py-5 gap-5 border border-solid shadow-sm rounded-lg">
            <div className="flex flex-row gap-3">
              <img width={20} src="/assets/logo.png" className="w-[20px] h-[20px] rounded-full " alt="logo" />
              <span className="text-lg ">Comprehensive Rubric Matrix</span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col gap-2 justify-center items-center">
                <img width={20} src="/assets/stick.svg" alt="tick" />
                <div className="h-[40px] w-[1px] bg-black"></div>
                <img width={20} src="/assets/stick.svg" alt="tick" />
                <div className="h-[40px] w-[1px] bg-black"></div>
                <img width={20} src="/assets/stick.svg" alt="tick" />
                <div className="h-[40px] w-[1px] bg-black"></div>
                <img width={20} src="/assets/stick.svg" alt="tick" />
                <div className="h-[40px] w-[1px] bg-black"></div>
                <img width={20} src="/assets/stick.svg" alt="tick" />
                
              </div>
              <div className="flex flex-col">
                <span className="flex pb-6 px-2 border-b">Analyze user input</span>
                <span className="flex py-6 px-2 border-b">Identify key criteria</span>
                <span className="flex py-6 px-2 border-b">Assign weights to criteria</span>
                <span className="flex py-6 px-2 border-b">Generate Scoring Description</span>
                <span className="flex py-6 px-2">Compiling the final rubric...</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row w-full p-5 gap-5 border border-solid shadow-sm rounded-lg">
            <img width={20} src="/assets/logo.png" className="w-[20px] h-[20px] rounded-full " alt="logo" />
            <div className="flex flex-col gap-2 ">
              <div className="flex flex-row gap-2">
                <span className="pr-2 border-r">Proposal Evaluation Agent</span>
                <span className="text-sm text-gray-500">2:46 PM</span>
              </div>
              <span className="text-gray-500">Below is your dynamically generated rubric. You can edit the descriptions for each score to clarify what each level represents.</span>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
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
                </table>
                <p className="mt-4 text-gray-600">
                  Click on the <span className="text-violet-500">“coLumns”</span> or <span className="text-red-500">“rows” </span> to review and edit the rubric. Once you're satisfied, type the command <code className="text-blue-600">/deploy</code> to initiate the deployment process.
                </p>
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row gap-2">
                    <img width={20} src="/assets/relay.svg" alt="relay" />
                    <img width={20} src="/assets/copy.svg" alt="copy" />
                    <img width={30} src="/assets/share.svg" alt="share" />
                    <img width={20} src="/assets/save.svg" alt="save" />
                  </div>
                  <div className="flex flex-row gap-2 p-2 bg-gray-200 rounded-lg">
                    <img width={20} src="/assets/pen.svg" alt="pen" />
                    <span>Edit Rubric</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex bottom-10 w-full">
            <div onClick={()=>setIsInput(true)} className={`flex ${isInput?"flex-col w-full float-start":"flex-row"} w-full border border-gray-200 rounded-2xl shadow-sm p-3 items-center`}>
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
    </div>
  )
}
