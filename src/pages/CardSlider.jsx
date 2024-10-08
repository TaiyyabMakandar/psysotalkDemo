import React, { useRef } from "react";
import { FaAngleLeft, FaAngleRight, FaPhone, FaStar, FaHeart } from "react-icons/fa";

const Card = ({ title, subtitle, icon: Icon, className, onClick }) => (
    <li
        onClick={onClick}
        className={`flex flex-col items-center bg-white shadow-lg shadow-b rounded-md m-2 p-4 cursor-pointer ${className}`}
    >
        <div className="flex items-center justify-center w-full h-[200px] rounded">
            <Icon className="text-5xl text-white bg-yellow-300 p-[20px] rounded-full h-[100px] w-[100px]" />
        </div>
        <h2 className="text-[black] text-2xl font-bold mt-[20px]">{title}</h2>
        <span className="text-gray-600 p-[15px]">{subtitle}</span>
    </li>
);

const Carousel = () => {
    const carouselRef = useRef(null);
    const scrollAmount = 400;

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft -= scrollAmount;
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft += scrollAmount;
        }
    };

    const handleCardClick = (title) => {
        alert(`You clicked on ${title}`);
    };

    // Array of cards with different icons
    const cards = [
        { title: "Today's Horoscope", subtitle: "Reading your Today’s horoscope is one of the best ways to predict your future.", icon: FaPhone },
        { title: "Free Kundli", subtitle: "Explore your Kundli for personalized insights.", icon: FaStar },
        { title: "Compatibility", subtitle: "Find out your compatibility with others.", icon: FaHeart },
        { title: "Festival 2024", subtitle: "Check the upcoming festivals and celebrations.", icon: FaPhone },
        { title: "Tarot Reading", subtitle: "Get insights through Tarot readings.", icon: FaStar },
        { title: "Numerology", subtitle: "Discover the power of numbers in your life.", icon: FaHeart },
    ];

    return (
        <div className="relative flex items-center px-[80px] ">
            <FaAngleLeft
                onClick={scrollLeft}
                className="text-2xl cursor-pointer absolute left-10 z-10 border-solid border-4 border-gray-400 rounded-full p-2 h-10 w-10"
            />
            <ul
                ref={carouselRef}
                className="carousel flex overflow-x-auto space-x-4 py-4 px-8 scrollbar-hide w-[1700px] scroll-smooth overflow-y-hidden overflow-x-hidden gap-[20px]"
                style={{ scrollBehavior: "smooth" }}
            >
                {cards.map((card, index) => (
                    <Card
                        className="h-[300px] w-[400px] flex-shrink-0"
                        key={index}
                        title={card.title}
                        subtitle={card.subtitle}
                        icon={card.icon}  // Pass the icon component
                        onClick={() => handleCardClick(card.title)}
                    />
                ))}
            </ul>
            <FaAngleRight
                onClick={scrollRight}
                className="text-2xl cursor-pointer absolute right-10 z-10 border-solid border-4 border-gray-400 rounded-full p-2 h-10 w-10"
            />
        </div>
    );
};

export default Carousel;
