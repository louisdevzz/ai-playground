import { sliceString } from "@/utils/utils";
import Link from "next/link";

const Siderbar = () => {
    return(
        <div className="flex flex-col gap-10 p-10 w-[26rem] border-r border-gray-100 h-screen relative shadow-sm">
            <div className="flex flex-row justify-between w-full items-center">
                <Link href={"/"}>
                    <img width={20} height={10} className="w-5 h-5" src="/assets/arrow-left.svg" alt="icon" />
                </Link>
                <div className="flex flex-row gap-1">
                    <img width={20} src="/assets/logo.png" alt="logo" />
                    <span>{sliceString("Rubric Application Screening",20)}</span>
                </div>
                <div className="flex flex-row gap-2">
                    <button>
                        <img width={20} src="/assets/search.svg" alt="icon" />
                    </button>
                    <button>
                        <img width={20} src="/assets/plus.svg" alt="icon" />
                    </button>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <span className="text-gray-300">HISTORY</span>
                <div className="flex flex-col gap-2">
                    <Link href={"/agent"} className="flex cursor-pointer flex-row gap-2 items-center">
                        <img width={16} src="/assets/message.svg" alt="icon" />
                        <span className="text-gray-700">{sliceString("Rubric Application Screening/ ViaPrize Campaign",20)}</span>
                    </Link>
                </div>
            </div>
            <div className="fixed bottom-16 flex flex-col gap-2">
                <span className="text-gray-300">PAGES</span>
                <div className="flex flex-col gap-5 mt-2">
                    <Link href={"/"} className="flex flex-row gap-2">
                        <img width={18} src="/assets/store.svg" alt="icon" />
                        <span className="text-gray-700">Marketplace</span>
                    </Link>
                    <Link href={"/"} className="flex flex-row gap-2">
                        <img width={18} src="/assets/question.svg" alt="icon" />
                        <span className="text-gray-700">Help</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Siderbar;