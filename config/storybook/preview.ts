import { Theme } from '../../src/app/providers/theme';
import { ThemeDecorator } from './../../src/shared/config/storybook/ThemeDecorator';
import { StyleDecorator } from './../../src/shared/config/storybook/StyleDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator';
import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default {
  decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouterDecorator],
};
