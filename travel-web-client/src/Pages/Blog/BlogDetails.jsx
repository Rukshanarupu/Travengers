import { Link, useLoaderData } from "react-router-dom";
import { FaAngleDoubleRight, FaCalendarAlt, FaFacebook, FaInstagram, FaLinkedinIn, FaRegComment, FaTwitter } from 'react-icons/fa';
import CommonBtn from "../../Components/Button/CommonBtn";
// import { MdOutlinePersonOutline } from 'react-icons/md';


const BlogDetails = () => {
    const detailsBlog = useLoaderData();
    // console.log(detailsBlog)

    const {blog, blog_name, blogger, blogger_img, date, img_link, comment_details}=detailsBlog
    console.log(comment_details)

    return (
       <div className="bg-slate-100 px-3 md:px-0">
            <div className="mx-auto max-w-screen-xl w-full py-10 ">
                <div>
                    <img className="rounded" src={img_link} alt="" />
                    <div className="flex justify-evenly">
                        <p className='flex gap-1 items-center'><FaCalendarAlt/> {date}</p>
                        {/* <p className='flex gap-1 items-center'><MdOutlinePersonOutline className='text-[22px]'/>{blogger}</p> */}
                        <p className="flex gap-1 items-center"><FaRegComment/> Comments (05)</p>
                    </div>
                    <hr className="my-5"/>
                </div>
                <div>
                    <h2 className='text-xl font-bold lg:text-3xl md:text-2xl hover:text-myOrange mt-4 mb-2 font-neue'>{blog_name}</h2>
                    <p>{blog}</p>
                    <h3 className="font-bold text-lg mt-3 mb-2 font-neue">Build Camping Easily</h3>
                    <p>nec Vel nunc vivamus felis sit est, mus aliquam massa volutpat. Consectetur scelerisque tincidunt vulputate quis. Metus eu, nisi nibh et adipiscing natoque tincidunt. Sed morbi arcu integer vestibulum scelerisque tincidunt mauris. Lectus molestie vestibulum ac, nec. Nisl rutrum cras dictum lectus molestie leoenim sapien aenean lectus. Platea enim nunc feugiat mauris, ut in volutpat nunc. Nulla sit rhoncus consequat malesuada magna diam tempor mauris proin vulputate tortorpurus nunc elementum quam pharetra mauris Habitant massa turpis nunc eu. Aliquet at velit etiam turpis a arcu consectetur sed.</p>
                </div>
                <div className="md:flex gap-3 items-center bg-white mt-5 p-3">
                    <div className="flex justify-center md:justify-start">
                    <img className="w-[150px] rounded mb-2" src={blogger_img} alt="" />
                    </div>
                    <div>
                        <h3 className="font-bold md:text-lg">{blogger}</h3>
                        <p className="text-xs">Author</p>
                        <p className="text-[14px] mt-[5px]">Donec duis enim ipsum odio at cursus. Fames semper enim integer epsum ultricies faucibus augue enim semper</p>
                        <div className="flex gap-2 mt-4 justify-center md:justify-start">
                            <Link to=""><FaFacebook/></Link>
                            <Link to=""><FaInstagram/></Link>
                            <Link to=""><FaLinkedinIn/></Link>
                            <Link to=""><FaTwitter/></Link>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="font-bold mt-3 mb-2 font-neue">Popular Comments</h3>
                    <hr className="my-2 bg-slate-300 h-[1px]"/>
                    <div>
                        {
                            comment_details?.map((comment) => (
                                <div key={comment.id} className="grid lg:grid-cols-2">
                                    <div className="flex items-start gap-3 md:gap-5 border-b border-slate-300 px-2 py-5 md:py-5 mb-5">
                                    <img className="w-[100px] rounded-full" src={comment.comment_img} alt="" />
                                    <div>
                                        <h1 className="font-bold">{comment.comment_author}</h1>
                                        <p className="text-[10px]">{comment.comment_date}</p>
                                        <p className="text-xs my-2">{comment.comments}</p>
                                        <button className="flex items-center gap-1 text-[13px]">Reply <FaAngleDoubleRight/></button>
                                    </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="grid lg:grid-cols-2">
                <div className="mt-5 bg-gray-200 p-6">
                    <h3 className="font-semibold mt-3 mb-2 font-neue">Leave a Comments</h3>
                    <p className="text-xs">Send us your valuable feedback about our services</p>
                    <div className="mt-5">
                        <div className="grid md:grid-cols-2 gap-5 mb-4">
                            <input type="email" name="comment-email" id="" placeholder="Email Address"
                            className='w-full px-3 py-1 rounded-md focus:outline-blue-300 bg-white text-gray-900'/>
                            <input type="text" name="comment-name" id="" placeholder="Your Name"
                            className='w-full px-3 py-1 rounded-md focus:outline-blue-300 bg-white text-gray-900'/>
                        </div>
                        <textarea name="comments-des" id="" cols="30" rows="6" placeholder="Write comments"
                        className='w-full px-3 py-1 rounded-md focus:outline-blue-300 bg-white text-gray-900'/>
                        <CommonBtn myBtn="Send Comments"/>
                    </div>
                </div>
                </div>
            </div>
       </div> 
    );
};

export default BlogDetails;