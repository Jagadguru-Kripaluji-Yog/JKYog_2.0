import { FC } from 'react';
import { Button } from '../../../button/button';
import { EventHighlights } from './event-highlights';
import { TabsSection } from './tabs-section';
import { Highights } from './highlights';
import { PhotoAlbum } from './photo-album';
import { WhatToExpect } from '../event-description/what-to-expect';
import { Guidelines } from '../event-description/guidelines';

const descriptionMock = `Swami Mukundananda&apos;s special lectures during shivirs are a profound journey into the depths of Vedic
scriptures, including the Bhagavad Gita, Ramayan, Narad Bhakti Darshan, and various intricate philosophical
subjects. Swamiji elucidates these ancient teachings, weaving in anecdotes, shlokas (verses), real-life
examples, and even humour to make the profound wisdom of the scriptures accessible to all.His lectures serve
as an inspirational source, leaving his audiences enriched, enlightened, and uplifted.`;

const tabsData1 = [
  { label: 'Lecture By Swamiji', description: descriptionMock },
  { label: 'Soulful Kirtans', description: descriptionMock },
  { label: 'Parikrama', description: descriptionMock },
  { label: 'Temple Darshan', description: descriptionMock },
  { label: 'Cultural Programs', description: descriptionMock },
  { label: 'Q&A Sessions', description: descriptionMock },
];

const descriptionMock1 = `Swami Mukundananda's special lectures during shivirs are 
a profound journey into the depths of Vedic scriptures, 
including the Bhagavad Gita, Ramayan, Narad Bhakti Darshan, and various intricate philosophical subjects. `;

const tabsData2 = [
  { label: 'Note', description: descriptionMock1 },
  { label: 'Venue', description: descriptionMock1 },
  { label: 'Shivir Seva', description: descriptionMock1 },
  { label: 'Main Mandir Darshan', description: descriptionMock1 },
];

export const ReatreatDescription: FC = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="p-6 lg:p-10 bg-bg-secondary rounded-[20px]">
        <h4 className="text-heading text-2xl font-ptserif font-bold italic mb-3">Description of the Event:</h4>
        <p className="text-primary text-lg leading-6 font-satoshi-regular mb-6 lg:mb-8">
          JKYog retreats are a great way to practically implement the spiritual, inspirational, and motivational
          knowledge under the direct guidance of H. H. Swami Mukundananda ji. It is a wonderful way to isolate one from
          material disturbances and focus on spiritual rejuvenation and transformation.
        </p>
        <div className="flex flex-col lg:flex-row justify-start gap-4">
          <Button type="link" href="/" variant="contained" color="primary" text="Register" />
          <Button type="link" href="/" variant="outlined" color="primary" text="Watch Live" />
        </div>
      </div>
      <EventHighlights />
      <TabsSection title="Shivir Highights:" tabsData={tabsData1} />
      <Highights />
      <p className="text-primary text-lg leading-6 font-satoshi-regular">
        Children have Bal-Mukund sessions where they learn slokas, Indian culture, character building values, and get to
        meet friends from similar background. For youth there are exclusive Bhagavad Gita sessions, Toastmasters
        sessions, and Music classes. Highlights of the retreat are the festival celebrations, parikrama where everyone
        chants kirtans outdoor, question & answer sessions with Swamiji.
      </p>
      <PhotoAlbum />
      <WhatToExpect />
      <TabsSection title="Booking Details:" tabsData={tabsData2} />
      <Guidelines />
      <p className="text-primary text-lg leading-6 font-satoshi-regular">
        Children have Bal-Mukund sessions where they learn slokas, Indian culture, character building values, and get to
        meet friends from similar background. For youth there are exclusive Bhagavad Gita sessions, Toastmasters
        sessions, and Music classes. Highlights of the retreat are the festival celebrations, parikrama where everyone
        chants kirtans outdoor, question & answer sessions with Swamiji.
      </p>
    </div>
  );
};
