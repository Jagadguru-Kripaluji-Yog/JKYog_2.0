import React from "react"
import FeaturedEvents from "./FeaturedEvents"
import UpcommingEvents from "./UpcommingEvents"

const Courses = () => {
  return (
    <div className=" flex flex-col justify-center items-center gap-[100px] self-stretch px-10 py-[88px] rounded-[40px] bg-[#fbe5c4] ">
      <FeaturedEvents />
      <UpcommingEvents />
      <button className="flex h-12 items-center gap-1 px-8 py-3.5 rounded-[100px] bg-[#ef6f1f]">
        All Events
      </button>
    </div>
  )
}

export default Courses
