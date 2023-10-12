import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Destination = () => {
    const destinations = useLoaderData();
    console.log(destinations)
    return (
        <div className='max-w-screen-xl mx-auto w-full my-10'>
            <h1 className='lg:text-5xl md:text-3xl text-xlmb-5 text-center font-neue mb-6 underline'>Our Travel Destination</h1>
            {
                destinations?.map(singlePlace => (
                    <div key={singlePlace.id} className="grid md:grid-cols-3 gap-5 mb-5">
                        <img src={singlePlace.imageLink} className="max-w-sm w-full rounded-lg shadow-2xl" />
                        <div className='md:col-span-2'>
                            <h1 className="lg:text-3xl md:text-xl text-lg font-bold">{singlePlace.name}</h1>
                            <p className="py-3">{singlePlace.description}</p>
                            <button>
                                <Link to={`/destination/${singlePlace.id}`} 
                                className='flex items-center gap-[5px] normal-case bg-myYellow px-5 py-2 rounded-xl'>
                                    Booking <FaArrowRight className='ml-2'/>
                                </Link>
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Destination;