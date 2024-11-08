import {useState} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const foodItems = [
    {
        id: 1,
        title: 'VEGETABLES BURGER',
        subtitle: 'Barbecue Italian cuisine pizza',
        image: '/images/vegetable-burger.png'
    },
    {
        id: 2,
        title: 'SPECIAL PIZZA',
        subtitle: 'Barbecue Italian cuisine pizza',
        image: '/images/special-pizza.png'
    },
    {
        id: 3,
        title: 'SPECIAL FRENCH FRIES',
        subtitle: 'Barbecue Italian cuisine',
        image: '/images/french-fries.png'
    },
    {
        id: 4,
        title: 'CUISINE CHICKEN',
        subtitle: 'Japanese Cuisine Chicken',
        image: '/images/cuisine-chicken.png'
    }
];

const PopularFoodItems = () => {
    const [prevArrowActive, setPrevArrowActive] = useState(false);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        nextArrow: <NextArrow onClick={() => setPrevArrowActive(true)}/>,
        prevArrow: <PrevArrow isActive={prevArrowActive} onClick={() => setPrevArrowActive(false)}/>,
        responsive: [
            {
                breakpoint: 1301,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    nextArrow: <NextArrow onClick={() => setPrevArrowActive(true)}/>,
                    prevArrow: <PrevArrow isActive={prevArrowActive} onClick={() => setPrevArrowActive(false)}/>
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    nextArrow: <NextArrow onClick={() => setPrevArrowActive(true)}/>,
                    prevArrow: <PrevArrow isActive={prevArrowActive} onClick={() => setPrevArrowActive(false)}/>
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: <NextArrowMobile onClick={() => setPrevArrowActive(true)}/>,
                    prevArrow: <PrevArrowMobile isActive={prevArrowActive} onClick={() => setPrevArrowActive(false)}/>
                }
            }
        ]
    };

    return (
        <>
            <div className="pt-[120px] px-6 lg:px-20 pb-8 max-w-[1389px] m-auto">
                <h3 className="text-red-600 font-bold text-lg flex items-center">
                    <img src="/images/Rectangle%204708.svg" className="me-2"/>
                    Crispy, Every Bite Taste
                </h3>
                <h2 className="text-3xl lg:text-5xl font-bold mb-8">POPULAR FOOD ITEMS</h2>
                <div className="relative">
                    <Slider {...settings}>
                        {foodItems.map(item => (
                            <div key={item.id} className="p-4 relative">
                                <div className="bg-white shadow-lg rounded-lg text-center p-6">
                                    <img src={item.image} alt={item.title} className="w-32 h-32 mx-auto"/>
                                    <div className="border-b-2 border-red-600 my-4 mx-auto w-10"></div>
                                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                    <p className="text-gray-500">{item.subtitle}</p>
                                </div>
                                {/* Arrows only visible on mobile at bottom center */}
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="hidden lg:block relative bottom-[270px]">
                <img src="/images/Onion.png" className="w-[100px]"/>
            </div>
        </>
    );
};

// Desktop Next Arrow
const NextArrow = ({onClick}) => (
    <button
        className="absolute hidden sm:block bg-white shadow-lg w-[38px] h-[38px] rounded-full bottom-[21.5rem] right-5 text-red-600 z-10"
        onClick={onClick}
    >
            <span className="text-4xl leading-[1.5rem]">
               ›
            </span>

    </button>

);

const PrevArrow = ({onClick, isActive}) => (
    <button
        className={`absolute bg-white hidden sm:block shadow-lg w-[38px] h-[38px] rounded-full bottom-[21.5rem] right-20 ${isActive ? 'text-red-600' : 'text-gray-700'} z-10`}
        onClick={onClick}
    >
         <span className="text-4xl leading-[1.5rem]">
                ‹
            </span>

    </button>
);

// Mobile Next Arrow (bottom center)
const NextArrowMobile = ({onClick}) => (
    <button
        className="absolute top-[300px] left-[56%] transform -translate-x-1/2 sm:flex lg:hidden bg-white shadow-lg w-[38px] h-[38px] rounded-full text-red-600 z-10"
        onClick={onClick}
    >
        <span className="text-4xl leading-[1.5rem]">›</span>
    </button>
);

// Mobile Previous Arrow (bottom center)
const PrevArrowMobile = ({onClick, isActive}) => (
    <button
        className={`absolute top-[300px] left-[42%] transform -translate-x-1/2 sm:flex lg:hidden bg-white shadow-lg w-[38px] h-[38px] rounded-full ${isActive ? 'text-red-600' : 'text-gray-700'} z-10`}
        onClick={onClick}
    >
        <span className="text-4xl leading-[1.5rem]">‹</span>
    </button>
);

export default PopularFoodItems;
