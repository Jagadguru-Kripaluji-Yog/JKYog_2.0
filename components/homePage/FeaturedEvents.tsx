"use client"
import React, { useEffect, useState } from "react"
import { ArrowLeft, ArrowRight } from "../icons"
import axios from "axios"
// import Image from "next/image"

const FeaturedEvents = () => {
  const [featuredEvents, setFeaturedEvents] = useState([])
  useEffect(() => {
    const getEvents = async () => {
      const response = await axios.get(
        "http://localhost:1337/api/featured-events?populate=image"
      )

      setFeaturedEvents(response.data.data)
    }
    getEvents()
  }, [])
  return (
    <div className="flex flex-col items-center gap-10 self-stretch">
      <nav className="flex justify-between items-center self-stretch">
        <p
          className="text-[44px] not-italic font-bold leading-[56px];
  font-family: PT Serif"
        >
          Featured Events
        </p>
        <div className="flex justify-center items-center gap-4">
          <button className="rounded-[40px] border-[1.25px] border-solid border-[#DAD3C8] flex items-start gap-2.5 p-4">
            <ArrowLeft />
          </button>
          <button className="rounded-[40px] border-[1.25px] border-solid border-[#DAD3C8] flex items-start gap-2.5 p-4">
            <ArrowRight />
          </button>
        </div>
      </nav>
      <div className="flex items-start gap-5 self-stretch">
        {/* one card eventually loop */}
        {featuredEvents.length > 0 &&
          featuredEvents.map((i: any, index) => {
            return (
              <div
                className="flex w-[555px] flex-col items-start p-2 border rounded-[20px] border-solid border-[#F0EBE1] bg-white"
                key={index}
              >
                {/* picture */}
                <div
                  className="w-[539px] h-[245px] bg-cover bg-no-repeat rounded-2xl"
                  style={{
                    backgroundImage: `url('http://localhost:1337${i.attributes.image.data.attributes.url}`,
                  }}
                >
                  <div className="inline-flex items-center gap-1 px-2 py-1 rounded-3xl bg-[#fffbf2] mt-[12px] ml-[12px]">
                    <p className="text-[#EF6F1F] text-center text-xs not-italic font-bold leading-4">
                      tags
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 self-stretch p-4">
                  <div className="flex flex-col justify-center items-start flex-[1_0_0]">
                    <p className="text-[#291900] text-[32px] not-italic font-bold leading-10">
                      {i.attributes.heading}
                    </p>
                    <div className="flex gap-2.5 self-stretch items-center justify-between">
                      <div>
                        {" "}
                        <p className="text-[rgba(58,45,39,0.70)] text-base not-italic font-normal leading-6 tracking-[-0.16px]">
                          {i.attributes.place}
                        </p>
                        <p className="text-[rgba(58,45,39,0.70)] text-base not-italic font-normal leading-6 tracking-[-0.16px]">
                          {i.attributes.date}
                        </p>
                      </div>
                      <button className="flex justify-center items-center gap-1.5 p-2.5 rounded-[100px] border-[1.25px] border-solid border-[#F0EBE1] bg-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M17.3025 6.71057L6.70295 17.3101M8.82356 6.72259L17.3039 6.69501L17.2763 15.1753"
                            stroke="#291900"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default FeaturedEvents
