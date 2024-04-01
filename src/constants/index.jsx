import {FaCircleQuestion,FaPercent ,FaDollarSign, FaCube, FaKey, FaPerson } from "react-icons/fa6";
import {  church,temple,sea,wallet,note,shopping,dollar} from "../assets";
export const Listicon = [
    { icon: <FaCircleQuestion />, name: "Dashboard" },
    { icon: <FaCube />, name: "Product" },
    { icon: <FaPerson />, name: "Customers" },
    { icon: <FaDollarSign />, name: "Income" },
    { icon: <FaPercent />, name: "Promote" },
    { icon: <FaKey />, name: "Help" },
];
export const boxattop=[
    {color:"green",imgSrc:dollar,amount:"$198k",amount2:"37.8% this month",desc:"",title:"Earning"},
    {color:"red",imgSrc:note,amount:"$2.4k",amount2:"2% this month",desc:"",title:"Orders"},
    {color:"red",imgSrc:wallet,amount:"$2.4k",amount2:"2% this month",desc:"",title:"Balance"},
    {color:"green",imgSrc:shopping,amount:"$89k",amount2:"17% this month",desc:"",title:"Total Sales"},
    ];
    export const tableData=[
        {nos:20,imgSrc:sea,amount:"$45.99",amount2:"32 in stock",desc:"Lorem ipsum sit amet, consectetur adip",title:"Abstract 3D"},
        {nos:20,imgSrc:temple,amount:"$45.99",amount2:"32 in stock",desc:"Lorem ipsum dolor sit amet, adip",title:"Sarphens illustration"},
        {nos:20,imgSrc:church,amount:"$45.99",amount2:"32 in stock",desc:"Ipsum dolor amet, consectetur adip",title:"Sarphens illustration"},
        ];