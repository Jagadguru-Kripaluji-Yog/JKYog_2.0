import React, { FC } from 'react';
import { Button } from '@/src/components/button/button';
import Cards from './cards/cards';
import { Heading } from '../../heading/heading';

const Blog: FC = () => {
  return (
    <section className="flex flex-col items-center gap-10 px-4 lg:px-10 py-[72px]">
      <Heading title="Recent blog posts" />
      <Cards />
      <Button type="link" href="/" text="View All" variant="contained" color="primary" />
    </section>
  );
};

export default Blog;
