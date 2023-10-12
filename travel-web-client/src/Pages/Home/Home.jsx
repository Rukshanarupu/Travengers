import Activities from './Activity/Activities';
import Banner from './Banner';
import BookingSearch from './BookingSearch/BookingSearch';
import Discount from './Discount/Discount';
import Service from './Service/Service';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {

    return (
        <div className='relative'>
            <Banner/>
            <BookingSearch/>
            <Discount/>
            <Activities/>
            <Service/>
            <Testimonial/>
        </div>
    );
};

export default Home;