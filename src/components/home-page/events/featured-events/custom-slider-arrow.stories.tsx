import { StoryObj, Meta } from '@storybook/react';
import { SampleArrowProps, SampleNextArrow, SamplePrevArrow } from './custom-slider-arrows';
export default {
  title: 'SliderArrow',
} as Meta<SampleArrowProps>;

export const CustomNextArrow: StoryObj<SampleArrowProps> = {
  render: (args) => <SampleNextArrow {...args} />,
};

export const CustomPrevArrow: StoryObj<SampleArrowProps> = {
  render: (args) => <SamplePrevArrow {...args} />,
};
