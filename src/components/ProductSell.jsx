import { FaSearch } from "react-icons/fa"
import TitleDropdown from "./TitleDropdown"
import Table from "./Table"

const ProductSell = () => {
  return (
    <div className="w-full px-4 py-2 ml-2 mb-2 mr-auto flex flex-col gap-3 h-full rounded-md shadow-md ">
    <div className="flex w-full flex-col lg:flex-row justify-between item-center">
        <h2>Product Sell</h2>
        <div className="bg-white flex justify-between items-center gap-0 rounded-md text-gray-500 ">
       <> <span><FaSearch/>
        </span><input type=" text" className="bg-inherit p-2 " name="name" value={""} placeholder="Search"/></>
        <TitleDropdown title={"Last 30 Days"}/>
        </div>
    </div>
    <div ><Table/></div>
    </div>
  )
}

export default ProductSell