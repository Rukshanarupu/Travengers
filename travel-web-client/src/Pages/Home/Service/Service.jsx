import Title from "../../../Components/Title";
import { BiBlanket, BiHeartCircle, BiPaperPlane } from "react-icons/bi";
import "../../../Components/CommonCss/Service.css"
import { GiCampfire, GiFishingPole } from "react-icons/gi";
import { TbTent } from "react-icons/tb";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";


const Service = () => {
    return (
        <div className="max-w-screen-xl mx-auto w-full p-2 mt-10">
            <Title shortTitle="Popular Services" mainTitle="Amazing Adventure Camping <br/> Services for Enjoyed"/>
            <div className="grid md:grid-cols-3 gap-5">
                <div className="service transition-all duration-[.5s] bg-slate-800 text-white hover:bg-white hover:text-slate-900 hover:shadow-xl rounded">
                    <img className="w-full" src="https://i.ibb.co/NsJdZZx/service-tent.jpg" alt="" />
                    <div className="relative">
                        <BiHeartCircle className="service-icon absolute -top-[22px] right-[15px] text-[40px] bg-myOrange rounded-full cursor-pointer"/>
                    </div>
                    <div className="p-5">
                    <h1 className="font-semibold text-xl mb-2">Classic Tents</h1>
                    <p>Sit amet consecteturauris natoque name pellentue augue mattis faucibus</p>
                    <div className="flex justify-between">
                        <ul className="flex  gap-1 text-xl my-3">
                            <li><BiBlanket/></li>
                            <li><GiCampfire/></li>
                            <li><TbTent/></li>
                            <li><GiFishingPole/></li>
                        </ul>
                        <p className="px-3 rounded bg-slate-200 text-black flex items-center gap-[6px] py-0">
                            <FaStar className="text-myOrange text-xl"/> 4.5
                        </p>
                    </div>
                    <button> 
                        <Link to="" className="read-btn pl-5 pr-[2px] py-2 rounded-[2rem] bg-white flex items-center text-black gap-2">Read More 
                            <BiPaperPlane className="p-2 rounded-full text-white read-btnIcon text-[2.25rem] bg-myBlue"/>
                        </Link>
                    </button>
                    </div>
                </div>
                <div className="service transition-all duration-[.5s] bg-slate-800 text-white hover:bg-white hover:text-slate-900 hover:shadow-xl rounded">
                    <img className="w-full" src="https://i.ibb.co/wwvwGX8/service-rent.jpg" alt="" />
                    <div className="relative">
                        <BiHeartCircle className="service-icon absolute -top-[22px] right-[15px] text-[40px] bg-myOrange rounded-full cursor-pointer"/>
                    </div>
                    <div className="p-5">
                    <h1 className="font-semibold text-xl mb-2">RV Luxury Tent</h1>
                    <p>Sit amet consecteturauris natoque name pellentue augue mattis faucibus</p>
                    <div className="flex justify-between">
                        <ul className="flex  gap-1 text-xl my-3">
                            <li><BiBlanket/></li>
                            <li><GiCampfire/></li>
                            <li><TbTent/></li>
                            <li><GiFishingPole/></li>
                        </ul>
                        <p className="px-3 rounded bg-slate-200 text-black flex items-center gap-[6px] py-0">
                            <FaStar className="text-myOrange text-xl"/> 4.5
                        </p>
                    </div>
                    <button> 
                        <Link to="" className="read-btn pl-5 pr-[2px] py-2 rounded-[2rem] bg-white flex items-center text-black gap-2">Read More 
                            <BiPaperPlane className="p-2 rounded-full text-white read-btnIcon text-[2.25rem] bg-myBlue"/>
                        </Link>
                    </button>
                    </div>
                </div>
                <div className="service transition-all duration-[.5s] bg-slate-800 text-white hover:bg-white hover:text-slate-900 hover:shadow-xl rounded">
                    <img className="w-full" src="https://i.ibb.co/Wst9SRT/service-cabin.jpg" alt="" />
                    <div className="relative">
                        <BiHeartCircle className="service-icon absolute -top-[22px] right-[15px] text-[40px] bg-myOrange rounded-full cursor-pointer"/>
                    </div>
                    <div className="p-5">
                    <h1 className="font-semibold text-xl mb-2">Glamping Cabin </h1>
                    <p>Sit amet consecteturauris natoque name pellentue augue mattis faucibus</p>
                    <div className="flex justify-between">
                        <ul className="flex  gap-1 text-xl my-3">
                            <li><BiBlanket/></li>
                            <li><GiCampfire/></li>
                            <li><TbTent/></li>
                            <li><GiFishingPole/></li>
                        </ul>
                        <p className="px-3 rounded bg-slate-200 text-black flex items-center gap-[6px] py-0">
                            <FaStar className="text-myOrange text-xl"/> 4.5
                        </p>
                    </div>
                    <button> 
                        <Link to="" className="read-btn pl-5 pr-[2px] py-2 rounded-[2rem] bg-white flex items-center text-black gap-2">Read More 
                            <BiPaperPlane className="p-2 rounded-full text-white read-btnIcon text-[2.25rem] bg-myBlue"/>
                        </Link>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;