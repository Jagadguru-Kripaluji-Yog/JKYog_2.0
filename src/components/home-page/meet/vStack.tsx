"use client";
import React, { useEffect, useState } from "react";
import { Location, Calendar, UpRightArrow } from "@/src/components/icons";
import axios from "axios";

const VStack = () => {
    const [poster, setPoster] = useState([]);
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        const getEvents = async () => {
            const response = await axios.get(
                "https://prod-strapi.jkyog.org/api/web-app-home-meet-posters?populate=poster"
            );
            setPoster(response.data.data);
        };
        const getPlaces = async () => {
            const response = await axios.get(
                "https://prod-strapi.jkyog.org/api/webapp-home-meet-places"
            );
            setPlaces(response.data.data);
        };

        getEvents();
        getPlaces();
    }, []);
    return (
        <div className="flex w-[1360px] justify-end items-center gap-5 ">
            {poster.length > 0 &&
                poster.map((i: any) => {
                    return (
                        <div key={i.attributes.id}>
                            <div className="flex w-[785px] flex-col justify-center items-start shrink-0 p-2 rounded-[20px] bg-white">
                                <div
                                    className="flex w-[769px] h-[410px] justify-center items-center rounded-2xl bg-no-repeat bg-cover"
                                    style={{
                                        backgroundImage: `url('${i.attributes.poster.data[0].attributes.url}`,
                                    }}
                                ></div>
                                <div className="flex items-end gap-2.5 self-stretch p-4">
                                    {/* text */}
                                    <div className="flex flex-col justify-center items-start gap-1 flex-[1_0_0]">
                                        {/* tags */}
                                        <div className="flex items-center gap-2 self-stretch">
                                            <div className="flex items-center gap-1 px-2 py-1.5 rounded-3xl bg-[#fef4ed]">
                                                <Location />
                                                <p className="text-[#EF6F1F] text-center text-xs not-italic font-bold leading-4">
                                                    {i.attributes.place}
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-1 px-2 py-1.5 rounded-3xl bg-[#fef4ed]">
                                                <Calendar />
                                                <p className="text-[#EF6F1F] text-center text-xs not-italic font-bold leading-4">
                                                    {i.attributes.date}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="text-[#291900] text-[32px] not-italic font-bold leading-10">
                                            {i.attributes.heading}
                                        </p>
                                        <p className="text-[#645743] text-base not-italic font-normal leading-6 tracking-[-0.16px]">
                                            {i.attributes.venue}
                                        </p>
                                    </div>
                                    {/* button */}
                                    <button className="flex justify-center items-center gap-1.5 p-2.5 rounded-[100px] border-[1.25px] border-solid border-[#F0EBE1]">
                                        <UpRightArrow />
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}

            {/* places */}
            <div className="flex flex-col items-start gap-6 flex-[1_0_0] self-stretch p-6 rounded-[20px] bg-[#fff]">
                <div className="flex flex-col items-start gap-4 flex-[1_0_0] self-stretch">
                    {places.length > 0 &&
                        places.map((i: any, index) => {
                            return (
                                <div
                                    className="flex items-start flex-col gap-3 flex-[1_0_0] self-stretch"
                                    key={index}
                                >
                                    <div className="flex justify-between items-center flex-[1_0_0] w-full">
                                        <div className="flex flex-col justify-center items-start gap-1.5 flex-[1_0_0]">
                                            {/* tags */}
                                            <div className="flex items-center gap-2 self-stretch">
                                                <div className="flex items-center gap-1 px-2 py-1.5 rounded-3xl bg-[#fef4ed]">
                                                    <Location />
                                                    <p className="text-[#EF6F1F] text-center text-xs not-italic font-bold leading-4">
                                                        {i.attributes.place}
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-1 px-2 py-1.5 rounded-3xl bg-[#fef4ed]">
                                                    <Calendar />
                                                    <p className="text-[#EF6F1F] text-center text-xs not-italic font-bold leading-4">
                                                        {i.attributes.date}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="">
                                                <p className="text-[#291900] text-xl not-italic font-bold leading-7">
                                                    {i.attributes.heading}
                                                </p>
                                            </div>
                                        </div>
                                        <button className="flex justify-center items-center gap-1.5 p-2.5 rounded-[100px] border-[1.25px] border-solid border-[#F0EBE1]">
                                            <UpRightArrow />
                                        </button>
                                    </div>
                                    {index < places.length - 1 && (
                                        <div className="h-[1.5px] w-full bg-[#f0ebe1]"></div>
                                    )}
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default VStack;
