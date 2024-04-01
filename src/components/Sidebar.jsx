import { Listicon } from "../constants";
import { SidebarItem } from "./SidebarItem";
import { FaGear } from "react-icons/fa6";
import TitleDropdown from "./TitleDropdown";

export default function Sidebar() {  
  return (
    <div className={`h-full w-full lg:min-h-[200vh] lg:w-[300px] flex bg-gradient-to-b from-blue-950 to-blue-800 border-r `}>
      <nav className="lg:h-screen w-full flex flex-row lg:flex-col justify-between  max-sm:flex-row lg:gap-4 bg-inherit text-white shadow-sm">
        <div className=" p-4 pb-2 flex justify-between items-center">
        <div className={` text-2xl flex justify-start gap-2 items-center pl-2`}><FaGear/><h1>Dashboard</h1></div>
        </div>

      <>
          <ul className="flex-1 px-3 max-lg:hidden">{
           Listicon.map((item,index)=>{
            return <SidebarItem key={index} {...item} text={item.name} icon={item.icon}/>
           })
          }</ul>
        </>

        <div className="w-full py-2 max-lg:hidden flex items-center backdrop-blur-md bg-white bg-opacity-5">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
           <TitleDropdown title={"Evano"} para={"Project Manager"} bgBackdrop width/>
        </div>
      </nav>
    </div>
  )
}