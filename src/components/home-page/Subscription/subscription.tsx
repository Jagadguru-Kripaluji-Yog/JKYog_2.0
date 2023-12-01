import React, { FC } from 'react';
import Form from './form';
import Quote from './quote';

const Subscription: FC = () => {
  return (
    <div className="grid grid-cols-2 gap-5 p-14 mx-[155px] my-[120px] rounded-[20px] items-center bg-[#fff3dd]">
      <Form />
      <Quote />
    </div>
  );
};

export default Subscription;
