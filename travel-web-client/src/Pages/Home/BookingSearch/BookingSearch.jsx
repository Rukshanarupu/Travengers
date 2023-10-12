import { useState } from 'react';
import { AiOutlineGlobal } from 'react-icons/ai';
import { FaHotel } from 'react-icons/fa';
import BookingContent from './BookingContent';

const BookingSearch = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
    };

    return (
            <div className="-mt-[4.25rem] mb-10 w-full max-w-screen-xl mx-auto bg-white rounded shadow-md p-5 md:pb-6 md:p-10">
                <div className="flex gap-3">
                    <div
                        className={`cursor-pointer p-2 flex gap-1 rounded items-center ${
                        activeTab === 1 ? 'bg-myBlue text-white' : 'text-myBlue font-bold border border-myBlue'
                        }`}
                        onClick={() => handleTabClick(1)}
                    >
                        <AiOutlineGlobal/> Tours
                    </div>
                    <div
                        className={`cursor-pointer p-2 flex gap-1 rounded items-center ${
                        activeTab === 2 ? 'bg-myBlue text-white' : 'text-myBlue font-bold border border-myBlue'
                        }`}
                        onClick={() => handleTabClick(2)}
                    >
                        <FaHotel/> Hotels
                    </div>
                </div>
                <div className="pt-4">
                    {activeTab === 1 && <div><BookingContent/></div>}
                    {activeTab === 2 && <div><BookingContent/></div>}
                </div>
            </div>
        
    );    
};

export default BookingSearch;
