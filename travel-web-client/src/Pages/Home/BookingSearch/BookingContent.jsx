import { useEffect, useRef, useState } from "react";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";

const BookingContent = () => {
    const [dateOne, setDateOne] = useState('2023-10-03');
    const [dateTwo, setDateTwo] = useState('2023-10-03');
    const [dayOne, setDayOne] = useState('');
    const [dayTwo, setDayTwo] = useState('');
    const [passengerCount, setPassengerCount] = useState(0);
    const [childrenCount, setChildrenCount] = useState(0);
    const [classType, setClassType] = useState('Economy');
    const [isHidden, setIsHidden] = useState(true); 

    const handleIncrement = () => {
        setPassengerCount(passengerCount + 1);
    };
    const handleDecrement = () => {
        if (passengerCount > 0) {
            setPassengerCount(passengerCount - 1);
        }
    };

    const handleChildIncrement = () => {
        setChildrenCount(childrenCount + 1);
    };
    const handleChildDecrement = () => {
        if (childrenCount > 0) {
            setChildrenCount(childrenCount - 1);
        }
    };
    // const totalPassengerCount = passengerCount + childrenCount;
    
    const handleClassChange = (newClassType) => {
        setClassType(newClassType);
    };
  
    const handleDateChangeOne = (e) => {
        const selectedDate = e.target.value;
        setDateOne(selectedDate);
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const selectedDay = new Date(selectedDate).getDay();
        setDayOne(daysOfWeek[selectedDay]);
    };
    const handleDateChangeTwo = (e) => {
        const selectedDate = e.target.value;
        setDateTwo(selectedDate);
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const selectedDay = new Date(selectedDate).getDay();
        setDayTwo(daysOfWeek[selectedDay]);
    };

    const divRef = useRef(null);
    const toggleHiddenDiv = () => {
        setIsHidden(!isHidden);
    };
    
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (divRef.current && !divRef.current.contains(event.target)) {
                setIsHidden(true);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
       <div>
            <div className="lg:flex gap-5">
                <div className="p-2 bg-sky-100 rounded w-full lg:w-[40%] mb-3">
                    <p className="font-bold text-xs">Destination</p>
                    <input type="text" placeholder="Where are you going?" className="w-full my-2 py-1 rounded bg-transparent"/>
                </div>
                <div className="grid md:grid-cols-2 gap-5 w-full lg:w-[60%]">
                    <div className="md:flex gap-5 justify-between p-2 bg-sky-100 rounded mb-3">
                        <div className=" mb-3">
                            <p className="font-bold text-xs">Journey date</p>
                            <input className="my-2 bg-transparent" type="date" value={dateOne} onChange={handleDateChangeOne}/>
                            <h2 className="text-xs">{dayOne}</h2>
                        </div>
                        <div className="">
                            <p className="font-bold text-xs">Return date</p>
                            <input className="my-2 bg-transparent" type="date" value={dateTwo} onChange={handleDateChangeTwo}/>
                            <h2 className="text-xs">{dayTwo}</h2>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-sky-100 rounded p-2">
                            <p className="font-bold text-xs">Passenger & Class </p>
                            <div type="button" className="w-full my-3 text-left" onClick={toggleHiddenDiv}>
                                {passengerCount > 1 ? `${passengerCount} Adults` : `${passengerCount} Adult`} & {childrenCount > 1 ? `${ childrenCount} Childrens` : `${ childrenCount} Child`}
                            </div>
                            <p className="text-xs">{classType}</p>
                        </div>
                        <div ref={divRef}
                        className={`absolute m-0 bg-white p-5 w-full ${isHidden ? 'hidden' : ''}`}>
                            <div>
                                <h6 className="text-myBlue font-bold mb-3">Passengers</h6>
                                <div className="flex gap-5 items-center justify-between">
                                    <span className="count">{passengerCount}</span>
                                    <div className="text-left">
                                        <p className="text-[14px]">Adult</p>
                                        <span className="text-[10px]">12+ yrs</span>
                                    </div>
                                    <div className=" flex">
                                        <button type="button" onClick={handleIncrement}>
                                            <AiOutlinePlusSquare />
                                        </button>
                                        <button type="button" onClick={handleDecrement} className="btn-subtract">
                                            <AiOutlineMinusSquare />
                                        </button>
                                    </div>
                                </div>
                                <div className="flex gap-5 items-center justify-between">
                                    <span className="count">{childrenCount}</span>
                                    <div className="text-left">
                                        <p className="text-[14px]">Children</p>
                                        <span className="text-[10px]">Less than 12 yrs</span>
                                    </div>
                                    <div className="flex">
                                        <button type="button" onClick={handleChildIncrement}>
                                            <AiOutlinePlusSquare />
                                        </button>
                                        <button type="button" onClick={handleChildDecrement} className="btn-subtract">
                                            <AiOutlineMinusSquare />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-5" />
                            <div>
                                <h6 className="text-myBlue font-bold mb-3">Cabin Class</h6>
                                <h2
                                className={`hover:bg-myAlmost-sky px-2 py-1 my-2 block text-[12px] ${
                                    classType === 'Economy' ? 'bg-myAlmost-sky text-white' : ''
                                }`}
                                onClick={() => handleClassChange('Economy')}
                                >
                                Economy
                                </h2>
                                <h2
                                className={`hover:bg-myAlmost-sky px-2 py-1 my-2 block text-[12px] ${
                                    classType === 'Business' ? 'bg-myAlmost-sky text-white' : ''
                                }`}
                                onClick={() => handleClassChange('Business')}
                                >
                                Business
                                </h2>
                                <h2
                                className={`hover:bg-myAlmost-sky px-2 py-1 my-2 block text-[12px] ${
                                    classType === 'Fast Class' ? 'bg-myAlmost-sky text-white' : ''
                                }`}
                                onClick={() => handleClassChange('Fast Class')}
                                >
                                Fast Class
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="flex justify-center">
                <button className="bg-myBlue rounded text-white py-2 px-5 mt-5" >Search</button>
            </div>
       </div> 
    );
};

export default BookingContent;