import { ComponentMeta } from '@storybook/react';
import InlineSX from './InlineSX';

export default {
  title: 'Custom components/InlineSX',
  component: InlineSX,
  args: {
    condition: true
  }
} as ComponentMeta<typeof InlineSX>;

export const Default = ({ ...args }) => <InlineSX {...args} />;
