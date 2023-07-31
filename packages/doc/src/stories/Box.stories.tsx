import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@awb-material-ui/react'

export default {
  title: 'Surfaces/Box',
  tags: ['autodocs'],
  component: Box,
  args: {
    children: (
      <>
        <Text>Testing box component</Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
