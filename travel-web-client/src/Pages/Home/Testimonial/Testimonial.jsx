

import KeenSlider from 'https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/+esm'
import "../../../Components/CommonCss/KeenSlider.css"
import { FaChevronLeft, FaChevronRight, FaStar, FaStarHalf } from 'react-icons/fa';
import { useEffect } from 'react';

const testimonialData = [
    {
      quote: "Loved the overall tour for all 6 days covering jaipur jodhpur and jaisalmer. worth ur money for sure. thanks. Driver was very good and polite and safe driving for all 6 days. on time pickup and drop overall. Thanks for it.",
      author: "Tajwar Rushaid",
      profession: "Pharmacist",
      Rating: 4.5,
      Date:"10/11/2023",
      img:"https://i.ibb.co/LP9XFJB/review2.png"
    },
    {
      quote: "No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?",
      author: "Rukshana Akter",
      profession: "Pharmacist",
      Rating: 5.0,
      Date:"10/11/2023",
      img:"https://i.ibb.co/p1V8gG9/review3.png"
    },
    {
      quote: "The place is in a great location in Gumbet. The area is safe and beautiful. The apartment was comfortable and the host was kind and responsive to our requests. Really a nice place.",
      author: "Asafudulla Prince",
      profession: "Developer",
      Rating: 4.5,
      Date:"10/11/2023",
      img:"https://i.ibb.co/bLHtjGm/review4.png"
    },
    {
      quote: "Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made that so easy. Agoda price was fantastic.",
      author: "Rukshana Akter",
      profession: "Doctor",
      Rating: 3.5,
      Date:"10/11/2023",
      img:"https://i.ibb.co/55RJMrX/review5.png"
    },
    // Add more testimonial data objects here as needed
];

const Testimonial = () => {
    useEffect(() => {
        const keenSlider = new KeenSlider(
            '#keen-slider',{
              loop: true,
              slides: { origin: 'center', perView: 1.25, spacing: 16 },
              breakpoints: {'(min-width: 1024px)': {slides: { origin: 'auto', perView: 1.5, spacing: 32 }}},
            }
        );

        const keenSliderPrevious = document.getElementById('keen-slider-previous');
        const keenSliderNext = document.getElementById('keen-slider-next');    
        const keenSliderPreviousDesktop = document.getElementById( 'keen-slider-previous-desktop');
        const keenSliderNextDesktop = document.getElementById('keen-slider-next-desktop');
      
        keenSliderPrevious.addEventListener('click', () => keenSlider.prev());
        keenSliderNext.addEventListener('click', () => keenSlider.next());      
        keenSliderPreviousDesktop.addEventListener('click', () => keenSlider.prev());
        keenSliderNextDesktop.addEventListener('click', () => keenSlider.next());
    }, []);

    return (
        <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-10 lg:me-0 lg:pe-0">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-center lg:gap-16">
                <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Do not just take our word for it...</h2>
                    <p className="mt-4 text-gray-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas veritatis illo placeat harum porro optio fugit a culpa sunt id!</p>
                    <div className='flex justify-between my-3'>
                        <div>
                            <h1 className='text-xl'>13m+</h1>
                            <p>Happy People</p>
                        </div>
                        <div className=''>
                            <h1 className='text-xl'>4.88</h1>
                            <p>Overall rating</p>
                            <ul className='flex gap-1 justify-center'><FaStar/> <FaStar/> <FaStar/> <FaStar/></ul>
                        </div>
                    </div>
                    <div className="hidden lg:mt-8 lg:flex lg:gap-4">
                        <button aria-label="Previous slide" id="keen-slider-previous-desktop"
                        className="rounded-full border border-myBlue p-3 text-myBlue transition hover:bg-myBlue hover:text-white">
                            <FaChevronLeft className='text-xl'/>
                        </button>
                        <button aria-label="Next slide" id="keen-slider-next-desktop"
                        className="rounded-full border border-myBlue p-3 text-myBlue transition hover:bg-myBlue hover:text-white">
                            <FaChevronRight className='text-xl'/>
                        </button>
                    </div>
                </div>

                <div className="-mx-6 lg:col-span-2 lg:mx-0">
                    <div id="keen-slider" className="keen-slider">
                    {testimonialData?.map((testimonial, index) => (
                        <div className="keen-slider__slide" key={index}>
                            <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                                <div>
                                    <img src={testimonial.img} alt="" />

                                    <div className="mt-4">
                                        <div className='flex justify-between items-center'>
                                            <div className="flex gap-0.5 text-myOrange">
                                                <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStarHalf/>
                                            </div>
                                            <p>08 Dec, 2021</p>
                                        </div>

                                        <p className="mt-4 leading-relaxed text-gray-700">{testimonial.quote}</p>
                                    </div>
                                </div>

                                <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                                    <p className='font-bold text-md'>{testimonial.author}</p>
                                    <p>{testimonial.profession}</p>
                                </footer>
                            </blockquote>
                        </div>
                    ))}
                    </div>
                </div>
            </div>

            <div className="mt-8 flex justify-center gap-4 lg:hidden">
                <button aria-label="Previous slide" id="keen-slider-previous"
                className="rounded-full border border-myBlue p-3 text-myBlue transition hover:bg-myBlue hover:text-white">
                    <FaChevronLeft className='text-lg'/>
                </button>

                <button aria-label="Next slide" id="keen-slider-next"
                className="rounded-full border border-myBlue p-3 text-myBlue transition hover:bg-myBlue hover:text-white">
                    <FaChevronRight className='text-lg'/>
                </button>
            </div>
        </div>
        </section>
    );
};

export default Testimonial;