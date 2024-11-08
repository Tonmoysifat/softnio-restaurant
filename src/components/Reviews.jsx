import React, {useState} from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FaPlay} from "react-icons/fa";

const reviews = [
    {
        text: "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would definitely recommend it.",
        author: "Khalid Al Dawasry",
        location: "Jeddah, Saudi",
        img: "/images/client1.png",
    },
    {
        text: "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would definitely recommend it.",
        author: "Khalid Al Dawasry",
        location: "Jeddah, Saudi",
        img: "/images/client1.png",
    },
    {
        text: "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would definitely recommend it.",
        author: "Khalid Al Dawasry",
        location: "Jeddah, Saudi",
        img: "/images/client1.png",
    },
];
const Reviews = () => {
    const [prevArrowActive, setPrevArrowActive] = useState(false);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        arrows: true,
        nextArrow: <NextArrow onClick={() => setPrevArrowActive(true)}/>,
        prevArrow: <PrevArrow isActive={prevArrowActive} onClick={() => setPrevArrowActive(false)}/>,
        responsive:[
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: <NextArrowMobile onClick={() => setPrevArrowActive(true)}/>,
                    prevArrow: <PrevArrowMobile isActive={prevArrowActive} onClick={() => setPrevArrowActive(false)}/>
                }
            },
        ]
    };
    return (
        <>

            <div className="px-6 lg:px-20 pb-8 pt-[120px] max-w-[1349px] m-auto">
                <div className="mb-[60px]">
                    <h3 className="text-red-600 font-bold text-lg flex items-center">
                        <img src="/images/Rectangle%204708.svg" className="me-2"/>
                        Crispy, Every Bite Taste
                    </h3>
                    <h2 className="text-3xl lg:text-5xl font-bold mb-8 uppercase mt-[16px]">What Some of my Customers
                        Say
                    </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[-1px]">
                    <div className="order-2 lg:order-1 relative">
                        <Slider {...settings}>
                            {reviews.map((review, index) => (
                                <div key={index} className="p-6 bg-[#FEBF00]
                            h-full flex justify-center flex-col lg:p-[117px]">
                                    <p className="text-lg font-medium">{review.text}</p>
                                    <div className="flex items-center justify-between mt-16 lg:mt-[75px]">
                                        <div>
                                            <p className="text-[16px] uppercase font-bold">{review.author}</p>
                                            <p className="text-xs">{review.location}</p>
                                        </div>
                                        <div className="">
                                            <img src={review.img} alt="Author" className="rounded-none"/>
                                            <div className="border-b-[3px] border-red-600 mt-4 mx-auto w-10"></div>
                                        </div>
                                    </div>
                                    <hr className="border-black h-[2px] mt-0"/>
                                </div>
                            ))}
                        </Slider>
                        <div className="absolute bottom-[50px]">
                            <img src="/images/Group.svg"/>
                        </div>

                    </div>
                    <div className="order-1 lg:order-2 relative right-0 lg:right-[3px]">
                        <img
                            src="/images/thumbnail.png"
                            alt="Video Thumbnail"
                            className="w-full h-[102%] lg:h-[101%] object-cover"
                        />
                        <button
                            className="absolute top-[46%] left-[46%] p-3 bg-yellow-500 rounded-full text-black hover:bg-yellow-600 focus:outline-none"
                        >
                            <FaPlay size={20}/>
                        </button>
                    </div>
                </div>
            </div>
            <div className="relative bottom-[320px] hidden lg:block">
                <img src="/images/12.png" className="w-[150px] ml-auto"/>
            </div>
            <div className="relative bottom-[850px] hidden lg:block">
                <img src="/images/221.png" className="w-[100px]"/>
            </div>
        </>
    )
}

const NextArrow = ({onClick}) => (
    <button
        className="absolute bg-white hidden sm:block shadow-lg w-[38px] h-[38px] rounded-full lg:top-[-3.4rem] xl:top-[-6.75rem] lg:left-[50rem] xl:left-[70rem] text-red-600 z-10"
        onClick={onClick}
    >
        <span className="text-4xl leading-[1.5rem]">
           ›
        </span>
    </button>
);

const PrevArrow = ({ onClick, isActive }) => (
    <button
        className={`absolute bg-white hidden sm:block shadow-lg w-[38px] h-[38px] rounded-full lg:top-[-3.4rem] xl:top-[-6.75rem] lg:left-[46rem] xl:left-[66rem] ${isActive ? 'text-red-600' : 'text-gray-700'} z-10`}
        onClick={onClick}
    >
        <span className="text-4xl leading-[1.5rem]">
           ‹
        </span>
    </button>
);

const NextArrowMobile = ({onClick}) => (
    <button
        className="absolute top-[330px] left-[56%] transform -translate-x-1/2
         sm:flex lg:hidden bg-white shadow-lg w-[38px] h-[38px] rounded-full text-red-600 z-10"
        onClick={onClick}
    >
        <span className="text-4xl leading-[1.5rem]">›</span>
    </button>
);

// Mobile Previous Arrow (bottom center)
const PrevArrowMobile = ({onClick, isActive}) => (
    <button
        className={`absolute top-[330px] left-[42%] transform -translate-x-1/2 sm:flex lg:hidden bg-white shadow-lg w-[38px] h-[38px] rounded-full ${isActive ? 'text-red-600' : 'text-gray-700'} z-10`}
        onClick={onClick}
    >
        <span className="text-4xl leading-[1.5rem]">‹</span>
    </button>
);
export default Reviews
