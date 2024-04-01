import { boxattop } from "../constants"
import BarChart from "./Barchart";
import BoxatTop from "./BoxatTop";
import { FaSearch } from "react-icons/fa";
import ProductSell from "./ProductSell";
import TitleDropdown from "./TitleDropdown";



const Home = () => {
    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',"Jul","Aug","Sep","Oct","Nov","Dec"],
        values: [65, 59, 43, 31, 56, 55,45, 90, 40, 41, 26, 65]
      };
  return (
    <div className='flex flex-col text-black justify-start items-center gap-3 min-h-screen bg-white overflow-hidden mx-auto'>
    {/* section */}
    <div className="flex gap-4 lg:flex-row flex-col w-full mx-auto lg:w-[99%] border-b  justify-between item-center px-2 lg:px-4 py-2 mt-3">
        <h2 className="text-lg shadow-md text-black">Hello Shahrukh 👋,</h2>
        <div className="bg-white flex shadow-md mr-2 rounded-md justify-start items-center text-gray-500 ">
        <span><FaSearch /></span>
        <input type=" text" className="bg-inherit px-2 mx-2" name="name" value={""} placeholder="Search"/>
        </div>
    </div>
    {/* section-1 */}
    <div className="lg:px-4 p-2 flex flex-col lg:flex-row gap-3 items-center w-full lg:w-[99%] mx-auto">
    {
        boxattop.map((item,index)=>{
            return <BoxatTop key={index} icon={item.icon} {...item}/>
        })
    }
    </div>
    {/* section-2 */}
    <div className="lg:px-4 flex flex-col justify-start lg:items-start max-lg:items-center lg:flex-row gap-3 py-4 h-full w-full mx-auto">
    <div className="overflow-hidden px-2 py-5 w-full flex flex-col gap-2 lg:w-[65%] bg-white backdrop-blur-md shadow-md rounded-md">
    <div className="flex justify-between items-center">
       <div className="flex flex-col justify-start items-start">
        <h2 className="font-bold text-lg">Overview</h2>
        <p className="text-sm text-gray-500">Monthly Earning</p>
       </div>
       <TitleDropdown title={"Quaterly"}/>
    </div>     
     <BarChart data={chartData} />
    </div>

    <div className="px-2 py-3 flex flex-col items-start w-full lg:w-[35%] min-h-[300px] shadow-md rounded-md ">
    <h1 className="font-bold text-lg">Customers</h1>
    <p className="text-sm text-gray-500">customers that buy product</p>
    <div className="flex relative mt-3 justify-center items-center w-full h-full ">
        <div className="p-4 flex flex-col items-center justify-center w-[200px] h-[200px] text-center bg-pink-400 ring-4 ring-blue-600 border-8 border-blue-600 rounded-full ">
        <p className="font-bold text-black text-2xl">65%</p>
        <p  className=" text-zinc-700 text-sm">Total New</p>
        <p  className=" text-zinc-700 text-sm">Customers</p>
        </div>
    </div>
   

    </div>
    </div>
    {/* section-3 */}
    <div className="w-[99%] mx-auto">
    <ProductSell/> 

    </div>    
    </div>
  )
}

export default Home