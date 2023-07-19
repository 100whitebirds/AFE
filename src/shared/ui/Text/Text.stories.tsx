import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Text } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
} as Meta<typeof Text>;

type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
  },
};

export const Error: Story = {
  args: {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
    isError: true,
  },
};

export const onlyTitle: Story = {
  args: {
    title: 'Title lorem ipsun',
  },
};

export const onlyText: Story = {
  args: {
    text: 'Description Description Description Description',
  },
};

export const PrimaryDark: Story = {
  args: {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const onlyTitleDark: Story = {
  args: {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const onlyTextDark: Story = {
  args: {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
