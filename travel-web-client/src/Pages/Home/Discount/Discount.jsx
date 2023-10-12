import { Link } from "react-router-dom";
import "../../../Components/CommonCss/Discount.css"

const Discount = () => {
    return (
        <div className="w-full max-w-screen-xl mx-auto lg:flex gap-5 px-2">
            <div className="">
                <h1 className="text-xl md:text-3xl pb-2 mb-2 border-b-[1px] border-myAlmost-sky">Go beyond your imagination</h1>
                <p>Discover your ideal experience with us</p>
            </div>
            <div className="grid md:grid-cols-2 gap-3 w-full">
            <div className=" my-3 md:my-0 discount-item">
                <Link to="">
                    <div className="discount-img"></div>
                    <p className=""></p>
                    <h1 className="discount-title">Up to <span className="lg:text-3xl">50%</span> Off</h1>
                    <div className="discount-description">
                        <p className="my-2">Holiday packages</p>
                        <button className="nav-btn px-3 py-2">Book Now</button>
                    </div>
                </Link>
            </div>

            <div className=" discount-item discount-item2">
                <Link to="#">
                    <div className="discount-img"></div>
                    <p className="discount-title">Up to <span className="lg:text-3xl">70%</span> Discount</p>
                    <div className="discount-description py-5">
                        <p className="my-2">Enjoy Summer Deals</p>
                        <button className="nav-btn px-3 py-2">Learn More</button>
                    </div>
                </Link>
            </div>
            </div>
        </div>
    );
};

export default Discount;