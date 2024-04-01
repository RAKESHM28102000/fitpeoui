import { tableData } from "../constants"
const Table = () => {
  return (  
    <table className="overflow-scroll w-full mb-5">
    <thead><tr className="text-center border-b mb-2 max-lg:text-[8px]">
      <th className="text-left">Product name</th>
      <th>Stock</th>
      <th>Price</th>
      <th>Total Sales</th>
    </tr>
    </thead>
    <tbody>
    {
      tableData.map((item,index)=>{
        return <tr key={index} className="text-sm text-center text-zinc-600 border-b mb-4">
  <td className="flex gap-4 px-2 py-3 items-center"><>
  <img className="w-[50px] h-[30px]" src={item.imgSrc} alt="moutian"/>
  <div>
  <h1 className="max-lg:text-[8px] text-lg text-left text-black font-bold">{item.title}</h1>
  <p className="text-left max-md:text-[5px]">{item.desc}</p>
  </div>
  </>
  </td>
  <td>
    <p className="max-lg:text-[8px] text-black">{item.amount2}</p>
  </td>
  <td className="max-lg:text-[8px] text-black font-bold">
    {item.amount}
  </td>
  <td className="max-lg:text-[8px] ">
    {item.nos}
  </td>
</tr>
      })
    }
    </tbody>
  </table>
  )
}

export default Table