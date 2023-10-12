import { Link, useLoaderData } from 'react-router-dom';
import { FaCalendarAlt } from 'react-icons/fa';
import { MdOutlinePersonOutline } from 'react-icons/md';
import "../../Components/CommonCss/Blog.css"
import CommonBtn from '../../Components/Button/CommonBtn';

const Blog = () => {
    const blogs = useLoaderData();
    // console.log(blogs)
    return (
        <div className='my-10 max-w-screen-xl mx-auto'>
            <h1 className='text-6xl text-center font-neue'>Our Recent Blogs </h1>
            <div className='grid md:grid-cols-2 gap-6 mt-10'>
                {
                    blogs?.map(singleBlog => (
                        <div key={singleBlog.id} className=" relative overflow-hidden bg-cover bg-no-repeat shadow-lg rounded-lg bg-opacity-40">
                            <Link to={`/blog-details/${singleBlog._id}`} className='blog grid md:grid-cols-2 gap-5'>
                                <figure><img className='blog-img w-full transition duration-300 ease-in-out cover center' src={singleBlog.img_link} alt="" /></figure>
                                <div className='py-5'>
                                    <p className='flex gap-1'><FaCalendarAlt/> {singleBlog.date}</p>
                                    <h2 className='text-2xl hover:text-myOrange mt-4 mb-2 font-neue'>{singleBlog.blog_name}</h2>
                                    <p className='text-xs flex items-center'><MdOutlinePersonOutline className='text-base'/>{singleBlog.blogger}</p>
                                    <CommonBtn myBtn="read more"/>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Blog;