import { FC, Fragment, ReactNode } from 'react';
import { EventInfoCard } from './event-info-card';

export interface EventInfo {
  heading: string;
  place: string;
  time: string;
  imageSrc?: string;
  tags?: ReactNode[];
}

export interface EventListProps {
  data: EventInfo[];
}
export const EventList: FC<EventListProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-center xl:gap-3.5 px-2 xl:p-2 rounded-[20px] bg-white w-full">
      {data.map((eventInfo, index) => {
        return (
          <Fragment key={eventInfo.heading}>
            <EventInfoCard {...eventInfo} />
            {index < data.length - 1 && <div className="w-full h-px bg-border-primary xl:mt-3.5"></div>}
          </Fragment>
        );
      })}
    </div>
  );
};
