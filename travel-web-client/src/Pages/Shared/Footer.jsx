import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaYoutubeSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="border-t-2 border-blue-200 mt-10 ">
            <div className="mx-auto max-w-screen-xl w-full md:flex justify-between pt-4">
                <div className="font-bold mb-3 md:mb-0">
                    <h1 className="underline">Need any help?</h1>
                    <div className="border-l-2 pl-2 border-myBlue my-5">
                        <h2 className="text-xs">Call 24/7 for any help</h2>
                        <p className="text-myBlue text-lg">+00 123 456 789</p>
                    </div>
                    <div className="border-l-2 pl-2 border-myBlue my-5">
                        <h2 className="text-xs">Mail to our support team</h2>
                        <p className="text-myBlue text-lg">support@domain.com</p>
                    </div>
                    <div className="border-l-2 pl-2 border-myBlue my-5">
                        <h2 className="text-xs mb-[6px]">Follow us on</h2>
                        <div className="text-myBlue text-lg flex gap-2">
                            <a href="#"><FaInstagramSquare/></a>
                            <a href="#"><FaFacebookSquare/></a>
                            <a href="#"><FaYoutubeSquare/></a>
                            <a href="#"><FaLinkedin/></a>
                        </div>
                    </div>
                </div>
                <div className=" mb-3 md:mb-0">
                        <h1 className="underline md:mb-5 font-bold">Company</h1>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#" className="my-1">Testimonials</a></li>
                            <li><a href="#">Rewards</a></li>
                            <li><a href="#" className="my-1">Career</a></li>
                            <li><a href="#">Meet the Team</a></li>
                            <li><a href="#" className="my-1">Blog</a></li>
                        </ul>
                </div>
                <div className=" mb-3 md:mb-0">
                    <h1 className="underline md:mb-5 font-bold">Support</h1>
                    <ul>
                        <li><a href="#">Account</a></li>
                        <li className="my-1"><a href="#">Faq</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li className="my-1"><a href="#">Terms and Conditions</a></li>
                        <li><a href="#">Contact</a></li>
                        <li className="my-1"><a href="#">Sitemap</a></li>
                    </ul>
                </div>
                <div className=" mb-3 md:mb-0">
                    <h1 className="underline md:mb-5 font-bold">Top cities</h1>
                    <ul>
                        <li><a href="#">Coxs Bazar</a></li>
                        <li className="my-1"><a href="#">Sylhet</a></li>
                        <li><a href="#">Chittagong</a></li>
                        <li className="my-1"><a href="#">Rangamati</a></li>
                        <li><a href="#">Bagerhat</a></li>
                        <li className="my-1"><a href="#">Sonargaon</a></li>
                    </ul>
                </div>
            </div>
            <div className="bg-blue-100">
                <p className="mx-auto max-w-screen-xl w-full text-xs py-3 mt-5 font-semibold text-center">Copyright © 2023 All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;