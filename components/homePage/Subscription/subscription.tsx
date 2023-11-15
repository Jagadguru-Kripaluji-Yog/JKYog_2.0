import React from "react"
import Form from "./form"
import Quote from "./quote"

const Subscription = () => {
  return (
    <div className="flex w-full mobile:flex-col gap-5 px-[155px] py-[120px] mobile:py-4 mobile:px-4 bg-white items-center justify-center">
      <Quote />
      <Form />
    </div>
  )
}

export default Subscription
