"use client"
import React, { useEffect, useState } from "react"
import { Location, Calendar } from "@/components/icons"
import axios from "axios"
import moment from "moment"

const Cards = () => {
  const [blogs, setBlogs] = useState<any>([])
  useEffect(() => {
    const getEvents = async () => {
      const response = await axios.get(
        "https://prod-strapi.jkyog.org/api/web-app-blogs?populate=poster"
      )
      setBlogs(response.data.data)
    }
    getEvents()
  }, [])
  return (
    <div className="flex flex-col items-start gap-5 self-stretch">
      {blogs.length > 0 && (
        <div className="flex h-[360px] items-center gap-5 self-stretch p-3 rounded-[20px] border-[1.25px] border-solid border-[#F0EBE1]">
          {/* image */}
          <div
            className="flex w-[584px] items-center self-stretch pl-2.5 pr-[413px] pt-2.5 pb-[302px] rounded-2xl bg-cover bg-no-repeat"
            style={{ backgroundImage: "url('./test.jpeg')" }}
          >
            <div className="flex items-start gap-2">
              <div className="flex items-center gap-1 px-2 py-1.5 rounded-3xl bg-[#fef4ed]">
                <Location />
                <p className="text-[#EF6F1F] text-center text-xs not-italic font-bold leading-4">
                  5 minread
                </p>
              </div>
              <div className="flex items-center gap-1 px-2 py-1.5 rounded-3xl bg-[#fef4ed]">
                {/* <Calendar /> */}
                <p className="text-[#EF6F1F] text-center text-xs not-italic font-bold leading-4">
                  {blogs[0].attributes.tag}
                </p>
              </div>
            </div>
          </div>
          {/* text */}
          <div className="flex flex-col justify-between items-start flex-[1_0_0] self-stretch px-0 py-3">
            <div className="flex w-[610px] h-[211.5px] flex-col items-start gap-3">
              <div className="flex flex-col justify-center items-start gap-2 self-stretch">
                <p className="self-stretch text-[#291900] text-[32px] not-italic font-bold leading-10">
                  {blogs[0].attributes.heading}
                </p>
                <p className="self-stretch text-[#645743] text-base not-italic font-normal leading-6 tracking-[-0.16px]">
                  {blogs[0].attributes.detail}
                </p>
              </div>
            </div>
            <p className="self-stretch text-[#EF6F1F] text-base not-italic font-bold leading-6">
              {moment(blogs[0].attributes.time).format("Do MMM YY")}
            </p>
          </div>
        </div>
      )}

      <div className="flex items-start gap-5 self-stretch">
        {blogs.length > 0 &&
          blogs.map((i: any, index: number) => {
            if (index === 0) return
            return (
              <div
                className="flex items-start gap-4 flex-[1_0_0] self-stretch p-3 rounded-[20px] border-[1.25px] border-solid border-[#F0EBE1]"
                key={index}
              >
                <div
                  className="flex w-[160px] h-[160px] items-center self-stretch pl-2.5 pr-[78px] pt-2.5 pb-[126px] rounded-2xl bg-cover bg-no-repeat"
                  style={{
                    backgroundImage: `url('${i.attributes.poster.data[0].attributes.url}`,
                  }}
                >
                  <div className="flex items-center gap-1 px-2 py-1.5 rounded-3xl bg-[#fef4ed]">
                    <p className="text-[#EF6F1F] text-center text-xs not-italic font-bold leading-4">
                      {i.attributes.tag}
                    </p>
                  </div>
                </div>

                <div className="flex  flex-col justify-between items-start flex-[1_0_0] self-stretch">
                  <p className="self-stretch text-[#291900] text-2xl not-italic font-bold leading-8">
                    {i.attributes.heading}
                  </p>
                  <p className="h-6 self-stretch text-[#EF6F1F] text-base not-italic font-bold leading-6">
                    {moment(i.attributes.time).format("Do MMM YY")}
                  </p>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Cards
