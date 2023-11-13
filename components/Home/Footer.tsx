"use client"
import React from 'react'; 
import Logo from '../../app/images/jkyoglogo.png';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <div className="w-full gap-3 px-[40px]   bg-[#FFFBF2] flex justify-start items-center">
      
       <div className='flex flex-col itesm-start gap-6 pt-16 px-[40px] pb-8
'>
   <Image src={Logo} alt="JKYog Logo" width={100} height={30} />

   
    
</div>

    </div>
  );
};

export default Footer;
