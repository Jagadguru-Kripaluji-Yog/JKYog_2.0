"use client"
import React from 'react'; 
import Logo from '../../app/images/jkyoglogo.png';
import Image from 'next/image';
import { ThinArrowRight } from '../icons/thinArrowRight';

const Footer = () => {

  const Yoga = [
    {name:"Prem Yoga - FREE Yoga & Mediation",url:"/"},
        {name:"Radhey Krishna Yogasan",url:"/"},
        {name:"Radhey Krishna Pranayam", url:"/"},
        {name:"Subtle Body Relaxation",url:"/"},
        {name:"Roop Dhyan Meditation",url:"/"},
        {name:"Science Of Healthy Diet",url:"/"},
        {name:"Yoga Teachers Training", url:"/"}
   ]

    const Events = [
      {name:"Programs",url:"/"},
        {name:"Upcoming Events",url:"/"},
        {name:"JKYog Center Events", url:"/"},
        {name:"JKYog Retreats",url:"/"},
       
   ]

    const Resources = [
         {name:"Blog",url:"/"},
        {name:"E-Journal", url:"/"},
        {name:"Press",url:"/"},
   ]

    const About = [
      {name:"Philosophy",url:"/"},
        {name:"About JKYog", url:"/"},
        {name:"Charitable works",url:"/"}, 
   ]
   
    const Offers = [
       {name:"Classes",url:"/"},
        {name:"Videos", url:"/"},
        {name:"Audios",url:"/"},
        {name:"Radio",url:"/"},
        {name:"My Daily Sadhana",url:"/"},
        {name:"Bhagvad Gita", url:"/"}
   ]

   const contact=[
   { name:"Social Media",url:"/"}
   ]


  return (
    <div className="w-full gap-3 px-[40px] font-serif  bg-[#FFFBF2] flex justify-center items-center">
      
       <div className='flex flex-col items-start  pt-16 px-[40px] pb-8'>
     
        <div className="flex md:flex-row flex-col gap-8">
            <div className='flex-2'>
               <Image src={Logo} alt="JKYog Logo" width={100} height={30} />
              
               <div className="flex flex-col mt-8 gap-4">
                <h1 className='leading-8 lg:text-[28px] text-[20px] text-[#291900] font-bold   '>Subscribe to Our Newsletter</h1>
                <div className="relative">
                  <input type='text' placeholder='Enter your email id' className='flex w-[346px] text-sm items-center p-4 pl-5 focus:none outline-none rounded-full border-[#dad3c8] border' />
                 <span className='p-3 absolute lg:right-12 right-3 rounded-full top-2  items-center gap-[10px] bg-[#ef6f1f]'>
                  <ThinArrowRight className=' text-white '/>
                </span>
                </div>
                <div className="flex gap-3 my-2 items-center">
                 
                 <input type='radio'  className='flex w-4 h-4 justify-center items-center gap-2  ' /> <span className='text-[rgba(100, 87, 67, 0.80)] text-base font-normal leading-6'>Join me to WhatsApp group</span>
                </div>

               </div>

               <div className="flex flex-col">
                <h1 className='text-[#291900 text-[20px] font-bold leading-7 '>Connect with us:</h1>
                <div>o</div>

               </div>
            </div>
             <div className="flex flex-1 flex-col gap-8">  
              <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
          
                  <div>
                    <h1  className='text-left text-[20px] mb-5 font-bold leading-6 text-[#291900] '>Yoga & Meditation</h1>
                    <div className="flex flex-col gap-[10px]">
                      {Yoga.map((item,i)=>{
                        return <p key={i} className='text-left text-[16px] mb-1 font-normal leading-6 text-[#291900]'>{item.name}</p>
                      })}
                    </div>
      
                  
                  </div>
                  <div>
                    <h1  className='text-left text-[20px] mb-5 font-bold leading-6 text-[#291900] '>Events</h1>
                    <div className="flex flex-col gap-[10px]">
                      {Events.map((item,i)=>{
                        return <p key={i} className='text-left text-[16px] mb-1 font-normal leading-6 text-[#291900]'>{item.name}</p>
                      })}
                    </div>

                  
                  </div>
                  <div>
                    <h1  className='text-left text-[20px] mb-5 font-bold leading-6 text-[#291900] '>Online Offering</h1>
                    <div className="flex flex-col gap-[10px]">
                      {Offers.map((item,i)=>{
                        return <p key={i} className='text-left text-[16px] mb-1 font-normal leading-6 text-[#291900]'>{item.name}</p>
                      })}
                    </div>
              
            </div>
         
              </div>

                <div className="grid md:grid-cols-3  grid-cols-1 gap-5">
          
                  <div>
                    <h1  className='text-left text-[20px] mb-5 font-bold leading-6 text-[#291900] '>Resources</h1>
                    <div className="flex flex-col gap-[10px]">
                      {Resources.map((item,i)=>{
                        return <p key={i} className='text-left text-[16px] mb-1 font-normal leading-6 text-[#291900]'>{item.name}</p>
                      })}
                    </div>
      
                  
                  </div>
                  <div>
                    <h1  className='text-left text-[20px] mb-5 font-bold leading-6 text-[#291900] '>About us</h1>
                    <div className="flex flex-col gap-[10px]">
                      {About.map((item,i)=>{
                        return <p key={i} className='text-left text-[16px] mb-1 font-normal leading-6 text-[#291900]'>{item.name}</p>
                      })}
                    </div>

                  
                  </div>
                  <div>
                    <h1  className='text-left text-[20px] mb-5 font-bold leading-6 text-[#291900] '>Contacts</h1>
                    <div className="flex flex-col gap-[10px]">
                      {contact.map((item,i)=>{
                        return <p key={i} className='text-left text-[16px] mb-1 font-normal leading-6 text-[#291900]'>{item.name}</p>
                      })}
                    </div>
              
            </div>
         
              </div>
          </div>
        </div>
         
     <div className='w-full border border-[#DAD3C8] my-6 '>

     </div>
            
            <div className='flex md:flex-row flex-col justify-between text-sm gap-2  self-stretch text-[#655743]'>
              <div className='leading-6'>© Copyright 2020 JKYog. All Rights Reserved.</div>
              <div className='flex items-left  md:flex-row flex-col md:gap-5 gap-2 leading-6'><span>Privacy Policy</span><span>Terms of Services</span></div>
               </div>
          </div>

        </div>
  );
};

export default Footer;
