import { StoryObj, Meta } from '@storybook/react';
import { FeaturedEventCard } from './featured-event-card';

export default {
  title: 'FeaturedEvent',
  component: FeaturedEventCard,
  args: {
    'heading': 'Navratri Festival',
    'date': '2023-11-21T18:33:00.000Z',
    'place': 'Online, TX',
    'createdAt': '2023-11-17T13:52:02.213Z',
    'updatedAt': '2023-11-17T13:52:06.255Z',
    'publishedAt': '2023-11-17T13:52:06.250Z',
    'image': {
      'data': [
        {
          'id': 97,
          'attributes': {
            'name': 'Rectangle 1819.png',
            'alternativeText': null,
            'caption': null,
            'width': 539,
            'height': 245,
            'formats': {
              'small': {
                'ext': '.png',
                'url': 'https://jipl-strapi-aws-s3-images-bucket.s3.amazonaws.com/small_Rectangle_1819_22fe786406.png',
                'hash': 'small_Rectangle_1819_22fe786406',
                'mime': 'image/png',
                'name': 'small_Rectangle 1819.png',
                'path': null,
                'size': 327.15,
                'width': 500,
                'height': 227,
              },
              'thumbnail': {
                'ext': '.png',
                'url':
                  'https://jipl-strapi-aws-s3-images-bucket.s3.amazonaws.com/thumbnail_Rectangle_1819_22fe786406.png',
                'hash': 'thumbnail_Rectangle_1819_22fe786406',
                'mime': 'image/png',
                'name': 'thumbnail_Rectangle 1819.png',
                'path': null,
                'size': 83.55,
                'width': 245,
                'height': 111,
              },
            },
            'hash': 'Rectangle_1819_22fe786406',
            'ext': '.png',
            'mime': 'image/png',
            'size': 93.06,
            'url': 'https://jipl-strapi-aws-s3-images-bucket.s3.amazonaws.com/Rectangle_1819_22fe786406.png',
            'previewUrl': null,
            'provider': 'aws-s3',
            'provider_metadata': null,
            'createdAt': '2023-11-17T13:51:52.225Z',
            'updatedAt': '2023-11-17T13:51:52.225Z',
          },
        },
      ],
    },
  },
} as Meta<typeof FeaturedEventCard>;

export const EventCard: StoryObj<typeof FeaturedEventCard> = {};
