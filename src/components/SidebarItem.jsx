import { FaAngleRight } from "react-icons/fa6";
export function SidebarItem({icon, text, active }) {    
    return (
      <li
        className={`
          relative flex justify-between items-center py-2 px-2 my-1
          font-medium rounded-md cursor-pointer
          transition-colors group gap-6
          ${
            active
              ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
              : "hover:bg-indigo-50 hover:text-gray-600"
          }
      `}
      >
      <div className="w-full flex justify-start items-center gap-2">
      <div className="bg-gray-800 rounded-full p-4">{icon}</div>
        <span
          className={`max-md:hidden overflow-hidden transition-all `}
        >
          {text}
        </span>   
       
        </div>
       {!(text==="Dashboard") && <div className="p-1"><FaAngleRight/></div>}
      </li>
    )
  }