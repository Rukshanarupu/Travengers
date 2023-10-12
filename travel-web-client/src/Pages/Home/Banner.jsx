import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css"
import sundorbon_img from '../../assets/images/slider/sundorbon.png'
import sajek_img from '../../assets/images/slider/Sajek.png'
import sreemongil_img from '../../assets/images/slider/Sreemongol.png'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
// import { useEffect, useRef } from "react";

const slidesData = [
  {
    imgSrc: sajek_img,
    title: "Sajek",
  },
  {
    imgSrc: sundorbon_img,
    title: "Sundorbon",
  },
  {
    imgSrc: sreemongil_img,
    title: "Sreemongol",
  },
];

const Banner = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: {
      perView: 3,
      spacing: 15,
    },
  });

//   const autoPlayRef = useRef();

//   useEffect(() => {
//     autoPlayRef.current = setInterval(() => {
//       if (slider) {
//         slider.next();
//       }
//     }, 3000); // Change slide every 3 seconds

//     return () => {
//       clearInterval(autoPlayRef.current);
//     };
//   }, [slider]);

  return (
    <div className="bg-[url(https://andtour-vue.netlify.app/img/bg.40066edd.png)] bg-cover bg-center pb-[140px] lg:pt-20 md:pt-10 pt-5 px-3">
      <div
        className="w-full max-w-screen-xl mx-auto grid md:grid-cols-2 gap-5 items-center"
      >
        <div className="text-white">
          <h1
            className="text-3xl md:text-5xl lg:text-7xl mb-5 "
            style={{ fontFamily: ["Bebas Neue", "cursive"] }}>
            Let's Start Travel
          </h1>
          <p>
            Our vision is to be the top travel agency in the industry, providing exceptional customer service and innovative travel
            solutions while promoting sustainable and ethical tourism practices. We aim to inspire people to explore the world, creating lasting
            connections and a more connected global community.
          </p>
          <div>
            <Link to="/destinations" className="my-btn mt-5 flex">
              See Destination
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
        <div className="">
          <div ref={sliderRef} className="keen-slider">
            {slidesData?.map((slide, index) => (
              <div
                key={index}
                className="keen-slider__slide number-slide1 relative "
              >
                <img className="w-full md:w-72" src={slide.imgSrc} alt="" />
                <div
                  className="rounded-2xl absolute  top-0 left-0 w-full h-full flex items-end"
                  style={{
                    background: "linear-gradient(0.12deg, #000000 0.1%, rgba(0, 0, 0, 0) 69.96%)",
                  }}
                >
                  <h5
                    className="mb-5 ml-5 text-xl md:text-2xl text-white"
                    style={{ fontFamily: ["Bebas Neue", "cursive"] }}
                  >
                    {slide.title}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
