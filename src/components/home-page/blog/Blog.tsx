import React, { FC } from 'react';
import { Button } from '@/src/lib/button/button';
import Cards from './cards/cards';

const Blog: FC = () => {
  return (
    <div className="flex flex-col items-center gap-10 px-10 py-[72px]">
      <h2 className="h-14 self-stretch text-[#291900] text-center text-[44px] font-ptserif font-bold leading-[56px]">
        Recent blog posts
      </h2>
      <Cards />
      <Button href="/" text="View All" variant="contained" color="primary" />
    </div>
  );
};

export default Blog;
