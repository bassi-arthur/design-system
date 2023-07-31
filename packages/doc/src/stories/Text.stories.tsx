import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@awb-material-ui/react'

export default {
  title: 'Typography/Text',
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
  component: Text,
  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, officia mollitia! Accusamus consectetur magnam, illo iure eos dolorem assumenda ab culpa officiis, id est fugiat quos? Voluptatum nemo accusantium cum.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
