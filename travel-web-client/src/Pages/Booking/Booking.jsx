import { useLoaderData} from 'react-router-dom';
import CommonBtn from '../../Components/Button/CommonBtn';

const Booking = () => {
    const details = useLoaderData();
    // const { name, description } = useLoaderData();
    console.log(details)

    const divisions = ["Dhaka", "Chittagong", "Rajshahi", "Khulna", "Barisal", "Sylhet", "Rangpur", "Mymensingh"];

    return (
        <div className='max-w-screen-xl mx-auto w-full my-10 mb-10 grid md:grid-cols-2 gap-5 md:gap-48'>
            <div className="">
                <h1 className='lg:text-5xl md:text-3xl text-2xl font-neue'>{details.name}</h1>
                <p>{details.description}</p>
            </div>
            <div className="bg-orange-100 px-6 py-5 rounded-lg">
                <div className="flex-col flex mb-5">
                    <span className="mb-2">Origin</span>
                    <select className="w-full px-3 py-2 rounded-md bg-white text-gray-900" required>
                        {
                            divisions?.map((division, indx) => <option
                                key={indx}
                            >{division}</option>)
                        }
                    </select>
                </div>
                <div className="flex-col flex mb-5">
                    <span className="mb-2">Destination</span>
                    <select className="w-full px-3 py-2 rounded-md bg-white text-gray-900" required>
                        <option disabled selected>{details.name}</option>
                    </select>
                </div>
                <div className="flex-col mt-5 text-gray-900 grid grid-cols-2 gap-4">
                    <div>
                        <p className="mb-2">From</p>
                        <input className='w-full px-3 py-2 rounded-md bg-white text-gray-900' type="date" required />
                    </div>
                    <div>
                        <p className="mb-2">To</p>
                        <input className='w-full px-3 py-2 rounded-md bg-white text-gray-900' type="date" required />
                    </div>
                </div>
                <div className='flex justify-center'>
                    <CommonBtn myBtn="Start Booking" btnLink="/hotels"/>
                </div>
            </div>
        </div>
    );
};

export default Booking;