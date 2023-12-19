import { Badge } from '@/src/components/badge/badge';
import Image from 'next/image';
import { formatDate } from '@/src/utils/format-date';
import { FC } from 'react';

export const CardSmall: FC<{ i: any }> = ({ i }) => {
  return (
    <div className="grid grid-cols-[0.8fr_1.2fr] gap-4 p-3 rounded-[20px] border border-border-primary">
      <div className="relative rounded-2xl">
        <Image src={i.attributes.poster.data[0].attributes.url} alt="small-image" width={160} height={160} />
        <div className="absolute top-2 left-2 z-10">
          <Badge text={i.attributes.tag} />
        </div>
      </div>

      <div className="flex flex-col justify-between items-start py-2 gap-2 lg:py-0 lg:gap-0">
        <h4 className="self-stretch text-heading text-xl leading-6 lg:text-2xl lg:leading-8 font-ptserif font-bold ">
          {i.attributes.heading}
        </h4>
        <p className="h-6 self-stretch text-button-primary opacity-50 text-base font-satoshi-bold leading-6">
          {formatDate(i.attributes.time)}
        </p>
      </div>
    </div>
  );
};
