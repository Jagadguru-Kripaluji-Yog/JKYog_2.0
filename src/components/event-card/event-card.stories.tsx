import { Meta, StoryObj } from '@storybook/react';
import { EventCard, EventCardProps } from '.';
import { Button } from '../button/button';

export default {
  title: 'EventCard',
  component: EventCard,
  args: {
    variant: 'basic',
  },
} as Meta<typeof EventCard>;

export const StackedImageCard: StoryObj<typeof EventCard> = {
  args: {
    orientation: 'stacked',
    heading: 'Navratri Festival',
    place: 'Dallas, TX',
    media: {
      type: 'image',
      src: 'https://jipl-strapi-aws-s3-images-bucket.s3.amazonaws.com/Rectangle_1819_22fe786406.png',
      alt: 'img',
    },
    callToActions: [
      <Button text="Register" key="Register" variant="contained" type="link" href="/" color="primary" />,
      <Button text="View details" key="View details" variant="outlined" type="link" href="/" color="primary" />,
    ],
    link: '/',
  },
  render: (args) => (
    <div className={`w-[500px] h-[624px]`}>
      <EventCard {...args} />
    </div>
  ),
};

export const LandscapeImageCard: StoryObj<typeof EventCard> = {
  args: {
    orientation: 'landscape',
    heading: 'Navratri Festival',
    place: 'Dallas, TX',
    media: {
      type: 'image',
      src: 'https://jipl-strapi-aws-s3-images-bucket.s3.amazonaws.com/Rectangle_1819_22fe786406.png',
      alt: 'img',
    },
  },
  render: (args) => (
    <div className="w-[900px] h-96">
      <EventCard {...args} />
    </div>
  ),
};
