import Image from 'next/image';
import { FC } from 'react';

const photos = [
  {
    src: '/images/events-page/album-small-1.png',
  },
  {
    src: '/images/events-page/album-small-2.png',
  },
  {
    src: '/images/events-page/album-small-3.png',
  },
  {
    src: '/images/events-page/album-small-4.png',
  },
];

export const PhotoAlbum: FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-ptserif font-bold text-2xl">Tirupati Darshan</h4>
      <Image
        src="/images/events-page/album-big.png"
        alt=""
        width={670}
        height={460}
        className="h-[340px] lg:h-[unset]"
      />
      <div className="flex gap-[14px] overflow-auto no-scrollbar -mr-4 pr-4">
        {photos.map(({ src }) => (
          <Image key={src} src={src} alt="" width={157} height={157} className="min-w-[157px] h-[157px] lg:h-[unset]" />
        ))}
      </div>
    </div>
  );
};
