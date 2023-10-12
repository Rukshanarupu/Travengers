import { GiCampingTent, GiBoatFishing, GiSpeedBoat } from "react-icons/gi";
import { MdOutlineDirectionsBike } from "react-icons/md";
import Title from "../../../Components/Title";
import "../../../Components/CommonCss/Activity.css"


const Activities = () => {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto w-full p-2 mt-10 mb-[230px]">
            <Title shortTitle="Popular Activities" mainTitle="Explore Real Adventure"/>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
                    <div className="relative">
                        <div className="activity-card activity-card-one bg-slate-200 hover:bg-transparent rounded-lg p-5 hover:text-white hover:bg-transparent]">
                            <div className=" text-[5rem] rounded-full">
                                <GiCampingTent className="activity-icon hover:text-white hover:bg-myBlue text-myBlue p-2 rounded-full bg-orange-200"/>
                            </div>
                            <h1 className="mt-5 mb-2 font-bold md:text-2xl text-lg">Tent Camping</h1>
                            <p className="activity-des">Sit amet consectetur integ tincidunt scelerie nodermen malesuada sceleris massa</p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="activity-card activity-card-two bg-slate-200 hover:bg-transparent rounded-lg p-5 hover:text-white hover:bg-transparent]">
                            <div className=" text-[70px]">
                                <MdOutlineDirectionsBike className="w-[80px] activity-icon hover:text-white hover:bg-myBlue text-myBlue p-1 rounded-full bg-orange-200"/>
                            </div>
                            <h1 className="mt-5 mb-2 font-bold md:text-2xl text-lg">Mountain Biking</h1>
                            <p className="activity-des">Sit amet consectetur integ tincidunt scelerie nodermen malesuada sceleris massa</p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="activity-card activity-card-three bg-slate-200 hover:bg-transparent rounded-lg p-5 hover:text-white hover:bg-transparent]">
                            <div className=" text-[70px]">
                                <GiBoatFishing className="w-[80px] activity-icon hover:text-white hover:bg-myBlue text-myBlue p-1 rounded-full bg-orange-200"/>
                            </div>
                            <h1 className="mt-5 mb-2 font-bold md:text-2xl text-lg">Fishing & Boat</h1>
                            <p className="activity-des">Sit amet consectetur integ tincidunt scelerie nodermen malesuada sceleris massa</p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="activity-card activity-card-four bg-slate-200 hover:bg-transparent rounded-lg p-5 hover:text-white hover:bg-transparent]">
                            <div className=" text-[70px]">
                                <GiSpeedBoat className="w-[80px] activity-icon hover:text-white hover:bg-myBlue text-myBlue p-1 rounded-full bg-orange-200"/>
                            </div>
                            <h1 className="mt-5 mb-2 font-bold md:text-2xl text-lg">Kayaking</h1>
                            <p className="activity-des">Sit amet consectetur integ tincidunt scelerie nodermen malesuada sceleris massa</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-white">hellow</div>
        </div>


    );
};

export default Activities;