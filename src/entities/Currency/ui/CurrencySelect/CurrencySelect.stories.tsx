import { Meta, StoryObj } from '@storybook/react';
import { CurrencySelect } from './CurrencySelect';

export default {
  title: 'shared/CurrencySelect',
  component: CurrencySelect,
} as Meta<typeof CurrencySelect>;

type Story = StoryObj<typeof CurrencySelect>;

export const Primary: Story = {
  args: {},
};
