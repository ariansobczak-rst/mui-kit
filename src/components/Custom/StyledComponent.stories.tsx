import { ComponentMeta } from '@storybook/react';
import StyledComponent from './StyledComponent';

export default {
  title: 'Custom components/StyledComponent',
  component: StyledComponent,
  args: {
    condition: true
  }
} as ComponentMeta<typeof StyledComponent>;

export const Default = ({ ...args }) => <StyledComponent {...args} />;
