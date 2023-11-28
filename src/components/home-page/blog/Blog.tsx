import React from 'react';
import Cards from './Cards';

const Blog = () => {
  return (
    <div className="flex flex-col items-center gap-10 px-10 py-[72px]">
      <p className="h-14 self-stretch text-[#291900] text-center text-[44px] not-italic font-bold leading-[56px]">
        Recent blog posts
      </p>
      <Cards />
      <button className="flex items-center gap-6 px-8 py-3.5 rounded-[100px] bg-[#ef6f1f] text-white">View All</button>
    </div>
  );
};

export default Blog;
