 
import React from 'react';
import Link from 'next/link';

const TopNavBar = () => {
  return (
    <nav className="w-full gap-3 px-[40px]   bg-[#291900] flex justify-end items-center">
      <span className='white text-white flex gap-2 px-4 py-3 text-base cursor-pointer'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10.1342 9.1525C10.0592 9.145 9.96915 9.145 9.88665 9.1525C8.10163 9.0925 6.68411 7.63 6.68411 5.83C6.67661 3.9925 8.16913 2.5 10.0067 2.5C11.8442 2.5 13.3367 3.9925 13.3367 5.83C13.3367 7.63 11.9117 9.0925 10.1342 9.1525Z" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4317 14.1039L13.2447 14.3038L13.0572 14.1039C12.6463 13.6657 11.9648 13.6298 11.5105 14.022V14.022C11.046 14.4227 10.9908 15.1176 11.3728 15.5987C11.9193 16.2866 12.5456 16.9659 13.2447 17.5C13.9615 16.9525 14.6012 16.2528 15.1573 15.5472C15.5184 15.0892 15.444 14.4243 15.0036 14.0434L14.9832 14.0257C14.5246 13.6298 13.8426 13.6657 13.4317 14.1039V14.1039Z" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M10.0065 17.3575C8.6415 17.3575 7.28398 17.0125 6.24896 16.3225C4.43394 15.1075 4.43394 13.1275 6.24896 11.92C8.31149 10.54 11.694 10.54 13.7566 11.92" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
        </svg> Volunteer
      </span>
      <span className='white gap-2  text-white flex  px-4 py-3  text-base  cursor-pointer'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="7.5" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4686 7.78192L13.469 7.78234C13.9373 8.25232 14.1894 8.89563 14.1652 9.55865C14.141 10.2217 13.8426 10.8449 13.3412 11.2794L10.8617 13.4285C10.3673 13.857 9.63303 13.857 9.1386 13.4285L6.65909 11.2794C6.15775 10.8449 5.85932 10.2217 5.83509 9.55865C5.81086 8.89563 6.063 8.25232 6.53129 7.78234V7.78234C7.41223 6.89824 8.82708 6.84655 9.77019 7.66401L10.0002 7.86329L10.2306 7.66359C11.1734 6.84636 12.5879 6.89805 13.4686 7.78192Z" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
        </svg> Donate
      </span>
      <span className='white  text-white flex gap-2  px-4 py-3 text-base  cursor-pointer'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M2.5 2.5L4.18649 2.7919L4.9673 12.0945C5.02973 12.8542 5.6646 13.4372 6.42676 13.4348H15.2719C15.9992 13.4364 16.6162 12.9013 16.7192 12.1812L17.4887 6.86386C17.5746 6.26952 17.1619 5.71816 16.5684 5.63222C16.5165 5.62492 4.4573 5.62086 4.4573 5.62086" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M11.7227 8.61757H13.971" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.07096 16.2456C6.31502 16.2456 6.51205 16.4434 6.51205 16.6867C6.51205 16.9308 6.31502 17.1286 6.07096 17.1286C5.82691 17.1286 5.62988 16.9308 5.62988 16.6867C5.62988 16.4434 5.82691 16.2456 6.07096 16.2456Z" fill="white" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2174 16.2456C15.4615 16.2456 15.6593 16.4434 15.6593 16.6867C15.6593 16.9308 15.4615 17.1286 15.2174 17.1286C14.9734 17.1286 14.7764 16.9308 14.7764 16.6867C14.7764 16.4434 14.9734 16.2456 15.2174 16.2456Z" fill="white" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
        </svg>Shop
      </span>
      <span className='white  text-white flex gap-2  px-4 py-3 text-base  cursor-pointer'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M14.5778 16.3868H5.53299C5.21822 16.3868 4.86598 16.1394 4.76106 15.8397L2.65832 7.16106C2.21615 5.91698 2.73327 5.53476 3.79749 6.2992L6.72036 8.39016C7.2075 8.72741 7.7621 8.55504 7.97194 8.00794L9.29098 4.49303C9.71067 3.36886 10.4077 3.36886 10.8274 4.49303L12.1464 8.00794C12.3562 8.55504 12.9108 8.72741 13.3905 8.39016L16.1335 6.4341C17.3026 5.59472 17.8647 6.0219 17.3851 7.3784L15.3573 15.8547C15.2449 16.1394 14.8926 16.3868 14.5778 16.3868Z" stroke="#EF6F1F" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M8.18115 13.6545H11.9284" stroke="#EF6F1F" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
        </svg> SM Exclusive
      </span>

      <span className='white  text-white flex gap-2  px-4 py-3 text-sm  cursor-pointer'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M9.99989 17.5C14.142 17.5 17.4998 14.1421 17.4998 10C17.4998 5.85786 14.142 2.5 9.99989 2.5C5.85782 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85782 17.5 9.99989 17.5Z" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M2.5 10H17.4998" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M9.99996 2.5C11.8759 4.55376 12.942 7.21903 12.9999 10C12.942 12.781 11.8759 15.4462 9.99996 17.5C8.12402 15.4462 7.05793 12.781 7 10C7.05793 7.21903 8.12402 4.55376 9.99996 2.5V2.5Z" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
        </svg> USA  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M4 6.5L8 10.5L12 6.5" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </span>


    </nav>
  );
};

export default TopNavBar;
