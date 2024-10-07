import React from 'react'
import { cardData } from '../utils/overViewData';
import { Card } from '@material-tailwind/react';
import CardSlider from './CardSlider';



const Home = () => {
    return (
        <>
            <div className="bg-gradient-to-b from-gray-900 via-black to-black ..., h-[70vh] p-[20px] flex items-center justify-center">
                <div className="flex flex-col gap-[20px] h-full w-[70%]">


                    <div className="bg-gradient-to-r from-yellow-300 from-10% via-white via-50% to-yellow-300 to-90% h-[300px] md:h-[400px] w-full m-auto rounded-[10px] px-6 md:px-[50px] lg:px-[100px]">
                        <div className="flex flex-col md:flex-row justify-center md:justify-end items-center h-full relative">
                            <div className="absolute bottom-[-42px] md:bottom-[-62px] left-1/2 md:left-[20px] transform -translate-x-1/2 md:translate-x-0" style={{ transform: "scaleX(-1)" }}>
                                <img src="/images/banner.svg" alt="bannerimage" className="w-[250px] md:w-[300px] lg:w-[400px]" />
                            </div>
                            <div className="flex flex-col items-center md:items-start gap-4 md:gap-[30px] text-center md:text-left">
                                <p className="text-2xl md:text-4xl text-gray-700">
                                    <span className="font-bold">200+ Celebs</span> recommends <span className="font-bold text-gray-800">Astrotalk</span>
                                </p>
                                <p className="text-3xl md:text-5xl text-gray-900">Chat With Astrologer</p>
                                <button className="flex justify-center text-center p-3 md:p-[15px] bg-black w-[150px] md:w-[200px] rounded-[50px] text-white text-lg md:text-2xl shadow-lg">Chat Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <div className="flex flex-wrap items-center justify-between gap-[20px] m-auto w-full">
                            {
                                cardData?.map((e, i) => {
                                    return (
                                        <Card

                                            className="text-[#fff] h-[190px] w-[100%] lg:w-[48%] xl:w-[23%] bg-[white]  flex flex-col items-center justify-between py-[30px] 
               hover:bg-[white] rounded-[10px]" style={{ boxShadow: "0 4px 8px 0 rgba(244, 244, 244, 0.966), 0 6px 20px 0 rgb(246, 244, 244);" }}>
                                            <div key={i}
                                                style={{ backgroundColor: e.color }} className='p-[20px] rounded-[60px]'>
                                                <img src={e.img} alt='bannerimage' className='w-[70px] ' />
                                            </div>

                                            <p className='text-[#000] text-2xl capitalize'>{e.name}</p>


                                        </Card>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-[60px] md:h-[80px] lg:h-[100px]">
                <h2 className="text-center text-xl md:text-3xl lg:text-4xl mt-[10px] md:mt-[15px] font-bold text-gray-700 uppercase">
                    Complimentary astrology services
                </h2>
                <div className="px-4 md:px-8 lg:px-16">
                    <CardSlider />
                </div>
            </div>

        </>
    );
}

export default Home