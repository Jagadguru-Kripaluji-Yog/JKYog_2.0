"use client"
import React, { useEffect, useState } from "react"
import axios from "axios"

const UpcommingEvents = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([])
  useEffect(() => {
    const getEvents = async () => {
      const response = await axios.get(
        "https://prod-strapi.jkyog.org/api/web-app-upcoming-events?populate=image"
      )

      setUpcomingEvents(response.data.data)
    }
    getEvents()
  }, [])
  return (
    <div className="flex flex-col items-center gap-10 self-stretch">
      <p className="text-[#291900] text-[44px] self-stretch not-italic font-bold leading-[56px]">
        Upcoming Events
      </p>
      {/* cards */}
      <div className="flex-col items-center gap-3.5 self-stretch p-2 rounded-[20px] bg-white">
        {upcomingEvents.length > 0 &&
          upcomingEvents.map((i: any, index) => {
            return (
              <div key={index}>
                <div className="flex items-center mobile:flex-col mobile:items-start  gap-5 self-stretch px-4 py-3 mobile:gap-0">
                  <div
                    className="flex w-20 h-20 justify-center items-center border rounded-[14.118px] bg-cover bg-no-repeat mobile:hidden"
                    style={{
                      backgroundImage: `url('${i.attributes.image.data[0].attributes.url}`,
                    }}
                  ></div>
                  <div className="flex lg:w-[661px]   flex-col justify-center items-start">
                    <div className="mobile:hidden">{i.attributes.tags}</div>
                    <p className="text-[#291900] mobile:text-[20px] text-[32px] not-italic font-bold leading-10 mobile:leading-5">
                      {i.attributes.heading}
                    </p>
                  </div>
                  <div className="flex w-[325px] flex-col justify-center items-start self-stretch">
                    <p className="text-[rgba(58,45,39,0.70)] text-base not-italic font-normal self-stretch leading-6 tracking-[-0.16px]">
                      {i.attributes.place}
                    </p>
                    <p className="text-[rgba(58,45,39,0.70)] text-base not-italic font-normal self-stretch leading-6 tracking-[-0.16px]">
                      {i.attributes.time}
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-start flex-[1_0_0] self-stretch"></div>
                  <div className="flex justify-center items-center gap-1.5 p-2.5 rounded-[100px] border-[1.25px] border-solid border-[#F0EBE1] mobile:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M17.3027 6.71057L6.7032 17.3101M8.82381 6.72259L17.3041 6.69501L17.2766 15.1753"
                        stroke="#291900"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                {index < upcomingEvents.length - 1 && (
                  <div className="w-full h-[1.25px] bg-[#f0ebe1]"></div>
                )}
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default UpcommingEvents
