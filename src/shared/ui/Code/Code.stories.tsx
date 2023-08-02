import { Meta, StoryObj } from '@storybook/react';
import { Code } from './Code';

export default {
  title: 'shared/Code',
  component: Code,
} as Meta<typeof Code>;

type Story = StoryObj<typeof Code>;

export const Normal: Story = {
  args: {
    text:
      'export default {\n' +
      "    title: 'shared/Code',\n" +
      '    component: Code,\n' +
      '    argTypes: {\n' +
      "        backgroundColor: { control: 'color' },\n" +
      '    },\n' +
      '} as ComponentMeta<typeof Code>;\n' +
      '\n' +
      'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n' +
      '\n' +
      'export const Normal = Template.bind({});',
  },
};
