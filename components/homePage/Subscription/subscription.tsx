import React from "react"
import Form from "./form"
import Quote from "./quote"

const Subscription = () => {
  return (
    <div className="flex w-[1440px]  gap-5 px-[155px] py-[120px] bg-white items-center">
      <Quote />
      <Form />
    </div>
  )
}

export default Subscription
