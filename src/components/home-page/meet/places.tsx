'use client';

import { FC, Fragment } from 'react';
import { getMeetPlaces } from '@/src/api/get-meet-places';
import { GetMeetPlacesData } from '@/src/types/meet-places';
import { Arrow } from '@/src/lib/arrow/arrow';
import { formatDate } from '@/src/utils/format-date';
import { Badge } from '@/src/lib/badge/badge';
import { useFetchData } from '@/src/hooks/use-fetch-data';

export const Places: FC = () => {
  const { data, isLoading } = useFetchData(getMeetPlaces);

  return (
    <div className="flex flex-col items-start gap-6 flex-[1_0_0] self-stretch p-6 rounded-[20px] bg-[#fff]">
      <div className="flex flex-col items-start gap-4 flex-[1_0_0] self-stretch">
        {data.map(({ id, attributes }, index) => (
          <Fragment key={id}>
            <PlaceListItem {...attributes} />
            {index < data.length - 1 && <div className="h-[1.5px] w-full bg-[#f0ebe1]"></div>}
          </Fragment>
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
            <h3 className="text-heading text-xl font-ptserif font-bold leading-7">{heading}</h3>
          </div>
        </div>
        <Arrow direction="topLeft" />
      </div>
    </div>
  );
};
