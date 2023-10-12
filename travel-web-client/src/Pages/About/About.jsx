import price from "../../assets/About/price.svg"
import easy from "../../assets/About/easy.svg"
import customer from "../../assets/About/customer.svg"
import Title from "../../Components/Title";


const About = () => {
    return (
        <div className="my-10 max-w-screen-xl mx-auto">
            <div>
                <Title mainTitle="People Why Choose Our Travel Adventure" shortTitle="Why Choose Us"/>
                <p className="text-center">These popular destinations have a lot to offer</p>
                <div className="md:flex justify-between mt-5">
                    <div>
                        <img src={price} alt="" />
                        <h1 className="my-2 md:text-3xl text-lg">Best Price Guarantee</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div>
                        <img src={easy} alt="" />
                        <h1 className="my-2 md:text-3xl text-lg">Easy & Quick Booking</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div>
                        <img src={customer} alt="" />
                        <h1 className="my-2 md:text-3xl text-lg">Customer Care 24/7</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;