import type { ComponentMeta, ComponentStory } from '@storybook/react'

import Typography from './Typography'

export default {
  title: 'Components/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>

export const Default: ComponentStory<typeof Typography> = (props) => (
  <Typography {...props} />
)
