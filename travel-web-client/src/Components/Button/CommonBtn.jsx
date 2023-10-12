import { useState } from "react";
import { BiPaperPlane } from "react-icons/bi";
import { Link } from "react-router-dom";


const CommonBtn = ({myBtn, btnLink}) => {
    const [isHovered, setIsHovered] = useState(false);

    const iconStyles = {
        backgroundColor: isHovered ? 'white' : '#1c5198',
        color: isHovered ? '#1c5198' : 'white',
    };

    return (
        <button className="mt-5">
            <Link to={btnLink} className="hover:bg-myBlue hover:text-white transition-all duration-[.5s] border border-myBlue pl-5 pr-[2px] py-1 rounded-[2rem] bg-white flex items-center text-black gap-2"
        onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                {myBtn} 
                <BiPaperPlane className="p-2 rounded-full text-white read-btnIcon text-[2.25rem] bg-myBlue" style={iconStyles}/>
            </Link>
        </button>
    );
};

export default CommonBtn;