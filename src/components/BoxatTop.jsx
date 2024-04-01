import { FaArrowDownLong, FaArrowUp,} from "react-icons/fa6"

const BoxatTop = ({title,imgSrc,amount,amount2,desc,color}) => {
  return (
    <div className='bg-white w-[250px] lg:w-[280px] rounded-md px-2 h-[160px] text-black flex justify-start items-center gap-4 shadow-md'>
        <img className="object-cover w-[80px] h-[80px]" src={imgSrc} alt="symbols" width={"90px"} height={"90px"}></img>
        <div className="flex flex-col">
        <p className="text-sm text-zinc-500">{title}</p>
        <h3 className="text-2xl text-black">{amount}</h3>
        <div className="flex items-center justify-start">
        <span className={`${color==="green" ? "text-green-500":"text-red-600"} text-sm flex justify-start items-center`}>
        {color==="green" ? (<FaArrowUp />):(<FaArrowDownLong/>)}{amount2}</span>
        <p className="text-sm text-black">{desc}</p>
        </div>

        </div>
    </div>
  )
}

export default BoxatTop