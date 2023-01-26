import { ComponentMeta } from '@storybook/react';
import WithHooks from './WithHooks';

export default {
  title: 'Custom components/WithHooks',
  component: WithHooks,
  args: {
    condition: true
  }
} as ComponentMeta<typeof WithHooks>;

export const Default = ({ ...args }) => <WithHooks {...args} />;
