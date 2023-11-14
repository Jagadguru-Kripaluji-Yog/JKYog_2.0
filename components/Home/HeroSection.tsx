"use client"
import React, { useState } from 'react';
import Philosophy from "../../app/images/philosphy.png";
import Community from "../../app/images/community.png";
import SawamiJi from "../../app/images/sawamiji.png";
import Image from 'next/image';

const HeroSection = () => {
    const [selectedImage, setSelectedImage] = useState(2);
    const handleClick = (index: number) => {
        console.log(index)
        setSelectedImage(index);
    };

    const section = [
        {
            title: "Philosophy",
            description: "The powerful techniques of mind management revealed by Swamiji are the elaborations of eternal truths of the vedas that have helped thousands of people transform their minds and their lives by learning and applying these principles.",
            image: Philosophy,
            url: "/"
        },
        {
            title: "Community",
            description: "The powerful techniques of mind management revealed by Swamiji are the elaborations of eternal truths of the vedas that have helped thousands of people transform their minds and their lives by learning and applying these principles.",
            image: Community,
            url: "/"
        },
        {
            title: `Swami Mukundananda. Man with a Mission`,
            description: "The powerful techniques of mind management revealed by Swamiji are the elaborations of eternal truths of the vedas that have helped thousands of people transform their minds and their lives by learning and applying these principles.",
            image: SawamiJi,
            url: "/"
        }
    ]

    return (
        <>
            <div className="w-full gap-0 bg-[#fff] flex md:flex-row flex-col  justify-stretch items-center">
                {section.map((item, i) => {
                    const isSelected = selectedImage === i;
                    const imageWidth = isSelected ? 100 : 30;

                    return (
                        <div
                            key={i}
                            className={`relative transition-all duration-200 w-[100%] delay-200 cursor-pointer ${isSelected ? `w-[${imageWidth}%]` : 'w-[30%]'
                                }`}
                            onClick={() => handleClick(i)}
                        >
                            <Image
                                src={item.image}
                                alt='logo'
                                width={370}
                                height={400}
                                className={`w-[100%] h-[50rem]`}

                            />

                            <div className='absolute bottom-5 p-8 flex text-left flex-col items-start gap-[15px]'>
                                <h1 className={`text-white font-bold   ${isSelected ? 'text-[52px]' : 'text-[32px]'}`}>{item.title}</h1>
                                {isSelected && <div className='delay-500 flex flex-col gap-[15px] transition-all duration-500'>
                                    <p className='text-white text-lg '>{item.description}</p>
                                    <button className='bg-[#EF6F1F] w-1/4 font-semibold mt-2 flex justify-center border-[#dad3c8] gap-[2px] rounded-3xl px-[32px] py-[14px]  text-white  '>Learn More</button>
                                </div>}
                            </div>
                        </div>
                    );
                })}


            </div>
            <div className='flex flex-col justify-center items-center text-center w-full h-[436px]  border border-gray-200 '>
                
                 <div className='  flex flex-col items-center   flex-shrink-0 gap-8 bg-gradient-to-r from-transparent via-opacity-10 to-opacity-0 via-opacity-90 to-white text-[#291900]'>
                    
                    <h2 className='text-center font-semibold leading-6 text-[40px] '>Jagadguru Kripaluji Yog</h2>
                    <p className='self-stretch text-[#645743] text-center font-SatoshiVariable text-[18px] font-normal break-words' >JKYog (Jagadguru Kripaluji Yog) is a non-profit charitable organization established for the physical, mental, and spiritual well-being of all humankind. It disseminates authentic knowledge of Yoga for the body, mind, and soul. It serves the needy, promotes education for the rural youth and provides healthcare for the underprivileged.</p>
                    <button className='bg-[#EF6F1F]  font-semibold mt-2 flex justify-center border-[#dad3c8] text-lg gap-[2px] rounded-3xl px-[32px] py-[14px]  text-white  '>About us</button>

                </div>
            </div>
           
        </>
    );
};

export default HeroSection;
