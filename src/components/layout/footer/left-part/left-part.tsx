import { FC } from 'react';
import Image from 'next/image';
import { Form } from './form';
import { ConnectWithUs } from './connect-with-us';

export const LeftPart: FC = () => (
  <div className="flex flex-col">
    <Image src="/images/logo.png" alt="logo" width={121} height={55} className="mb-14" />
    <div className="flex flex-col gap-[14px]">
      <h4 className="font-ptserif font-bold text-[28px] text-neutral-900 leading-9">
        Subscribe to Our <br /> Newsletter
      </h4>
      <Form />
    </div>
    <ConnectWithUs />
  </div>
);
