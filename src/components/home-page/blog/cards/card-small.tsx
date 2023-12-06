import { Badge } from '@/src/lib/badge/badge';
import Image from 'next/image';
import { formatDate } from '@/src/utils/format-date';
import { FC } from 'react';

export const CardSmall: FC<{ i: any }> = ({ i }) => {
  return (
    <div className="flex items-start gap-4 flex-[1_0_0] self-stretch p-3 rounded-[20px] border-[1.25px] border-solid border-[#F0EBE1]">
      <div className="relative flex w-[160px] h-[160px] pl-2.5 pt-2.5 rounded-2xl bg-cover bg-no-repeat">
        <Image src={i.attributes.poster.data[0].attributes.url} alt="small-image" fill />
        <div className="z-10">
          <Badge text={i.attributes.tag} />
        </div>
      </div>

      <div className="flex  flex-col justify-between items-start flex-[1_0_0] self-stretch">
        <h4 className="self-stretch text-heading text-2xl font-ptserif font-bold leading-8">{i.attributes.heading}</h4>
        <p className="h-6 self-stretch text-orange-500 opacity-50 text-base font-satoshi-bold leading-6">
          {formatDate(i.attributes.time)}
        </p>
      </div>
    </div>
  );
};
