import { FaAngleDown } from "react-icons/fa6"

const TitleDropdown = ({title,para,width}) => {
  return (
<div className={`flex justify-between items-center gap-3 mx-2 ${width && "w-full"}`}>
{ para ? ( <div className={`flex flex-col gap-2 px-2`}>
  <h4 className="font-semibold px-2 text-white">{title}</h4>
  <span className="text-xs text-white ">{para}</span>
</div>):(
  <p className="text-gray-500 text-sm">{title}</p>)
 }
  <FaAngleDown/>
  </div>
  
  )
}

export default TitleDropdown