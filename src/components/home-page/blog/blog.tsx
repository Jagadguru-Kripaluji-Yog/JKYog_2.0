import React, { FC } from 'react';
import { Button } from '@/src/components/button/button';
import Cards from './cards/cards';

const Blog: FC = () => {
  return (
    <section className="flex flex-col items-center gap-10 px-4 lg:px-10 py-[72px]">
      <h2 className="text-heading text-center text-[32px] leading-10 lg:text-[44px] lg:leading-[56px] font-ptserif font-bold ">
        Recent blog posts
      </h2>
      <Cards />
      <Button type="link" href="/" text="View All" variant="contained" color="primary" />
    </section>
  );
};

export default Blog;
