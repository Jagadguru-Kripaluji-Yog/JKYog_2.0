import React, { FC } from 'react';
import Form from './form';
import Quote from './quote';

const Subscription: FC = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-4 pb-6 lg:p-14 mx-4 xl:mx-[155px] my-20 xl:my-[120px] rounded-[20px] items-center bg-bg-secondary">
      <Form />
      <Quote />
    </section>
  );
};

export default Subscription;
