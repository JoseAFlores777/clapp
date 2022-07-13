// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { TagComponent } from '../../../../projects/clapp/src/lib/components/tag/tag.component';
import { componentWrapperDecorator } from '@storybook/angular';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Clapp-Lib/Components/cl-tag',
  component: TagComponent,
  decorators: [
    componentWrapperDecorator(
      (story) => `<div style="min-height: 200px; display: flex; justify-content: center;"><div style="align-self: center; justify-self: center;">${story}</div></div>`
    ),
  ],
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    type: {
      options: ['normal', 'approved', 'failed', 'purple', 'light-navy-blue', 'cyan'],
      control: { type: 'select' },
    },

    label: {
      control: { type: 'text' },
    },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<TagComponent> = (args: TagComponent) => ({
  props: args,
});

export const Principal = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Principal.args = {
  type: 'normal',
  label: 'Tag',
};
