'use client';

import { FC, useEffect, useState } from 'react';
import { getMeetPlaces } from '@/src/api/get-meet-places';
import { GetMeetPlacesData } from '@/src/types/meet-places';
import { Arrow } from '@/src/lib/arrow/arrow';
import { formatDate } from '@/src/utils/format-date';
import { Badge } from '@/src/lib/badge/badge';

export const Places: FC = () => {
  const [places, setPlaces] = useState<GetMeetPlacesData[]>([]);

  useEffect(() => {
    const getPlaces = async () => {
      const { data } = await getMeetPlaces();
      setPlaces(data.data);
    };

    getPlaces();
  }, []);

  return (
    <div className="flex flex-col items-start gap-6 flex-[1_0_0] self-stretch p-6 rounded-[20px] bg-[#fff]">
      <div className="flex flex-col items-start gap-4 flex-[1_0_0] self-stretch">
        {places.map(({ id, attributes }, index) => (
          <>
            <PlaceListItem key={id} {...attributes} />
            {index < places.length - 1 && <div className="h-[1.5px] w-full bg-[#f0ebe1]"></div>}
          </>
        ))}
      </div>
    </div>
  );
};

const PlaceListItem: FC<GetMeetPlacesData['attributes']> = ({ place, date, heading }) => {
  return (
    <div className="flex items-start flex-col gap-3 flex-[1_0_0] self-stretch">
      <div className="flex justify-between items-center flex-[1_0_0] w-full">
        <div className="flex flex-col justify-center items-start gap-1.5 flex-[1_0_0]">
          <div className="flex items-center gap-2 self-stretch">
            <Badge src="/icons/location.png" text={place} />
            <Badge src="/icons/calendar.svg" text={formatDate(date)} />
          </div>
          <div className="">
            <h3 className="text-[#291900] text-xl font-ptserif font-bold leading-7">{heading}</h3>
          </div>
        </div>
        <Arrow direction="topLeft" />
      </div>
    </div>
  );
};
