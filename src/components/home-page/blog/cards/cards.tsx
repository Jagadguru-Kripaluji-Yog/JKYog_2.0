'use client';
import React, { FC } from 'react';
import { CardSmall } from './card-small';
import { CardLarge } from './card-large';
import { useFetchData } from '@/src/hooks/use-fetch-data';
import { getBlogs } from '@/src/api/get-blogs';

const Cards: FC = () => {
  const { data, isLoading } = useFetchData(getBlogs);

  return (
    <div className="flex flex-col gap-5">
      {data.length > 0 && <CardLarge blogs={data} />}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {data.length > 0 &&
          data.map((i: any, index: number) => {
            if (index === 0) return;
            return <CardSmall key={index} i={i} />;
          })}
      </div>
    </div>
  );
};

export default Cards;
