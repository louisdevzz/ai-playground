import { sliceString } from "@/utils/utils";

const Navbar = () =>{
    return(
        <div className="flex flex-row justify-between w-full items-center px-5 py-5">
            <button>
                <img width={20} src="/assets/arrow-left.svg" alt="icon" />
            </button>
            <span>{sliceString("Rubric Application Screening",20)}</span>
            <button>
                <img width={20} src="/assets/menu.svg" alt="icon" />
            </button>
        </div>
    )
}

export default Navbar;