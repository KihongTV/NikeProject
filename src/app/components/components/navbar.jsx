'use client'
import { Link } from "react-scroll"
import { BsHouseDoorFill,BsFillChatLeftQuoteFill,BsHeartFill ,BsBellFill,BsFillBuildingFill} from "react-icons/bs";
const navbar = () => {
  
  return (
    <>
        <div className="hidden z-50  lg:flex items-center lg:fixed lg:right-1/2 lg:translate-x-1/2 lg:w-11/12 lg:rounded-b-lg justify-around font-medium py-2 bg-slate-800 shadow-slate-900 shadow-lg text-white text-xl  ">
            <div className="hidden lg:flex">
                <Link to="home" className="flex items-center gap-1 font-bold text-orange-600"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                <path fill="#F4511E" d="M6,16c-3.1,3.7-6,7.6-6,11.1c0,2,1.7,4.9,5.9,4.9c2.3,0,4.5-0.9,6.3-1.6c3-1.2,35.7-15.1,35.7-15.1c0.3-0.2,0.3-0.4-0.1-0.3c-0.2,0-35.6,9.4-35.6,9.4c-0.7,0.2-1.4,0.3-2.1,0.3c-3.1,0-5.1-1.5-5.1-4.7C4.9,18.7,5.1,17.8,6,16L6,16z"></path>
                </svg>Nike</Link>
            </div>
            <div className="hidden lg:flex gap-10 ">
            <Link to="home" smooth className="cursor-pointer" activeClass="text-orange-600" spy="true">Home</Link>
                    <Link to="Pupular" smooth className="cursor-pointer" activeClass="text-orange-600" spy="true">Pupular</Link>
                    <Link to="Offer" smooth className="cursor-pointer" activeClass="text-orange-600" spy="true">Offer</Link>
                    <Link to="Costomer" smooth className="cursor-pointer" activeClass="text-orange-600" spy="true">Costomer</Link>
                    <Link to="About" smooth className="cursor-pointer" activeClass="text-orange-600" spy="true">About</Link>
            </div>
            
        </div>
        <div className="lg:hidden flex fixed -bottom-1 z-50 bg-gray-900 rounded-t-2xl w-full justify-around px-2  font-bold gap-2 text-3xl items-center text-white">
                    <Link to="Pupular" smooth className="cursor-pointer bg-gray-900 rounded-3xl  px-4 py-5   transition-all duration-200 ease-in-out " activeClass="-translate-y-2  text-orange-600 " spy="true"><BsHeartFill></BsHeartFill></Link>
                    <Link to="Offer" smooth className="cursor-pointer bg-gray-900  rounded-3xl  px-4 py-5 transition-all duration-200 ease-in-out" activeClass="-translate-y-2  text-orange-600" spy="true"><BsBellFill></BsBellFill></Link>
                    <Link to="home" smooth className="cursor-pointer bg-gray-900 rounded-3xl  px-4 py-5 transition-all duration-200 ease-in-out" activeClass="-translate-y-2  text-orange-600" spy="true"><BsHouseDoorFill></BsHouseDoorFill> </Link>
                    <Link to="Costomer" smooth className="cursor-pointer bg-gray-900 rounded-3xl  px-4 py-5 transition-all duration-200 ease-in-out" activeClass="-translate-y-2  text-orange-600" spy="true"><BsFillChatLeftQuoteFill></BsFillChatLeftQuoteFill></Link>
                    <Link to="About" smooth className="cursor-pointer bg-gray-900 rounded-3xl  px-4 py-5 transition-all duration-200 ease-in-out" activeClass="-translate-y-2  text-orange-600" spy="true"><BsFillBuildingFill></BsFillBuildingFill></Link>
        </div>
    </>
  )
}

export default navbar

                    