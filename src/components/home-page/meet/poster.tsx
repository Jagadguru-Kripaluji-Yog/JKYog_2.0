'use client';

import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { getMeetPosters } from '@/src/api/get-meet-posters';
import { MeetPostersData } from '@/src/types/meet-posters';
import { formatDate } from '@/src/utils/format-date';
import { Arrow } from '@/src/lib/arrow/arrow';
import { Badge } from '@/src/lib/badge/badge';

export const Poster: FC = () => {
  const [poster, setPoster] = useState<MeetPostersData[]>([]);

  useEffect(() => {
    const getEvents = async () => {
      const { data } = await getMeetPosters();
      setPoster(data.data);
    };

    getEvents();
  }, []);

  return poster.length
    ? poster.map(({ attributes: { poster, place, date, heading, venue } }, i) => {
        return (
          <div key={i}>
            <div className="flex w-[785px] flex-col justify-center items-start shrink-0 p-2 rounded-[20px] bg-white">
              <Image
                src={poster.data[0].attributes.url}
                alt="poster-image"
                width={769}
                height={410}
                className="rounded-2xl"
              />
              <div className="flex items-end gap-2.5 self-stretch p-4">
                <div className="flex flex-col justify-center items-start gap-1 flex-[1_0_0]">
                  <div className="flex items-center gap-2 self-stretch">
                    <Badge src="/icons/location.png" text={place} />
                    <Badge src="/icons/calendar.svg" text={formatDate(date)} />
                  </div>
                  <h3 className="text-[#291900] text-[32px] font-ptserif font-bold leading-10">{heading}</h3>
                  <span className="text-[#645743] text-base font-satoshi-regular font-normal leading-6 tracking-[-0.16px]">
                    {venue}
                  </span>
                </div>
                <Arrow direction="topLeft" />
              </div>
            </div>
          </div>
        );
      })
    : null;
};
