import { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
} as Meta<typeof Modal>;

type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  args: {
    isOpen: true,
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.\n ',
  },
};

export const Dark: Story = {
  args: {
    isOpen: true,
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.\n ',
  },
};
