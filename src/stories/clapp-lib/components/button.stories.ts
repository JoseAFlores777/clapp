// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from '../../../../projects/clapp/src/lib/components/button/button.component';
import { componentWrapperDecorator } from '@storybook/angular';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Clapp-Lib/Components/cl-button',
  component: ButtonComponent,
  decorators: [
    componentWrapperDecorator(
      (story) => `<div style="min-height: 200px; display: flex; justify-content: center;"><div style="align-self: center; justify-self: center;">${story}</div></div>`
    ),
  ],
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    disabled: {
      options: [true, false],
      control: { type: 'boolean' },
    },

    type: {
      options: ['primary', 'secondary', 'tertiary', 'text', 'icon'],
      control: { type: 'select' },
    },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  disabled: false,
  type: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  disabled: false,
  type: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  disabled: false,
  type: 'tertiary',
};

export const Text = Template.bind({});
Text.args = {
  disabled: false,
  type: 'text',
};

export const Icon = Template.bind({});
Icon.args = {
  disabled: false,
  type: 'icon',
};
