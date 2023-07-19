import { Suspense } from "react";
import { StoryFn } from "@storybook/react";
import i18n from 'shared/config/i18n/i18n';
import { I18nextProvider } from "react-i18next";

export const TranslationDecorator = (StoryComponent: StoryFn) => (
  <I18nextProvider i18n={i18n}>
    <StoryComponent />
  </I18nextProvider>
);
