'use client';
import React from 'react';
import Image from 'next/image';
import { ArrowRight } from '../icons';
// import { ThinArrowRight } from "../icons/thinArrowRight"

const Footer = () => {
  const Yoga = [
    { name: 'Prem Yoga - FREE Yoga & Mediation', url: '/' },
    { name: 'Radhey Krishna Yogasan', url: '/' },
    { name: 'Radhey Krishna Pranayam', url: '/' },
    { name: 'Subtle Body Relaxation', url: '/' },
    { name: 'Roop Dhyan Meditation', url: '/' },
    { name: 'Science Of Healthy Diet', url: '/' },
    { name: 'Yoga Teachers Training', url: '/' },
  ];

  const Events = [
    { name: 'Programs', url: '/' },
    { name: 'Upcoming Events', url: '/' },
    { name: 'JKYog Center Events', url: '/' },
    { name: 'JKYog Retreats', url: '/' },
  ];

  const Resources = [
    { name: 'Blog', url: '/' },
    { name: 'E-Journal', url: '/' },
    { name: 'Press', url: '/' },
  ];

  const About = [
    { name: 'Philosophy', url: '/' },
    { name: 'About JKYog', url: '/' },
    { name: 'Charitable works', url: '/' },
  ];

  const Offers = [
    { name: 'Classes', url: '/' },
    { name: 'Videos', url: '/' },
    { name: 'Audios', url: '/' },
    { name: 'Radio', url: '/' },
    { name: 'My Daily Sadhana', url: '/' },
    { name: 'Bhagvad Gita', url: '/' },
  ];

  const contact = [{ name: 'Social Media', url: '/' }];

  return (
    <div className="w-full gap-3 px-[40px] font-serif  bg-bg-light flex justify-center items-center">
      <div className="flex flex-col items-start justify-between w-full  pt-16 px-[40px] pb-8 ">
        <div className="flex md:flex-row flex-col gap-8">
          <div className="flex flex-1 flex-col gap-8">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
              <div>
                <h1 className="text-left text-[20px] mb-5 font-bold leading-6 text-heading ">Yoga & Meditation</h1>
                <div className="flex flex-col gap-[10px]">
                  {Yoga.map((item, i) => {
                    return (
                      <p key={i} className="text-left text-[16px] mb-1 font-normal leading-6 text-heading">
                        {item.name}
                      </p>
                    );
                  })}
                </div>
              </div>
              <div>
                <h1 className="text-left text-[20px] mb-5 font-bold leading-6 text-heading ">Events</h1>
                <div className="flex flex-col gap-[10px]">
                  {Events.map((item, i) => {
                    return (
                      <p key={i} className="text-left text-[16px] mb-1 font-normal leading-6 text-heading">
                        {item.name}
                      </p>
                    );
                  })}
                </div>
              </div>
              <div>
                <h2 className="text-left text-[20px] mb-5 font-bold leading-6 text-heading ">Online Offering</h2>
                <div className="flex flex-col gap-[10px]">
                  {Offers.map((item, i) => {
                    return (
                      <p key={i} className="text-left text-[16px] mb-1 font-normal leading-6 text-heading">
                        {item.name}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3  grid-cols-1 gap-5">
              <div>
                <h1 className="text-left text-[20px] mb-5 font-bold leading-6 text-heading ">Resources</h1>
                <div className="flex flex-col gap-[10px]">
                  {Resources.map((item, i) => {
                    return (
                      <p key={i} className="text-left text-[16px] mb-1 font-normal leading-6 text-heading">
                        {item.name}
                      </p>
                    );
                  })}
                </div>
              </div>
              <div>
                <h2 className="text-left text-[20px] mb-5 font-bold leading-6 text-heading ">About us</h2>
                <div className="flex flex-col gap-[10px]">
                  {About.map((item, i) => {
                    return (
                      <p key={i} className="text-left text-[16px] mb-1 font-normal leading-6 text-heading">
                        {item.name}
                      </p>
                    );
                  })}
                </div>
              </div>
              <div>
                <h2 className="text-left text-[20px] mb-5 font-bold leading-6 text-heading ">Contacts</h2>
                <div className="flex flex-col gap-[10px]">
                  {contact.map((item, i) => {
                    return (
                      <p key={i} className="text-left text-[16px] mb-1 font-normal leading-6 text-heading">
                        {item.name}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full border border-border-primary my-6 "></div>

        <div className="flex md:flex-row flex-col justify-between text-sm gap-2  self-stretch text-[#655743]">
          <div className="leading-6">© Copyright 2020 JKYog. All Rights Reserved.</div>
          <div className="flex items-left  md:flex-row flex-col md:gap-5 gap-2 leading-6">
            <span>Privacy Policy</span>
            <span>Terms of Services</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
