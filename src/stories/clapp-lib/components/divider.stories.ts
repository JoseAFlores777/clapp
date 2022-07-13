// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { DividerComponent } from '../../../../projects/clapp/src/lib/components/divider/divider.component';
import { componentWrapperDecorator } from '@storybook/angular';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Clapp-Lib/Components/cl-divider',
  component: DividerComponent,
  decorators: [
    componentWrapperDecorator(
      (story) =>
        `
        <div style="display:flex; justify-content: center; align-items: center; height: 90vh;">
          ${story}
        </div>`
    ),
  ],
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    type: {
      options: ['horizontal', 'vertical', 'horizontal-dark', 'vertical-dark'],
      control: { type: 'select' },
    },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<DividerComponent> = (args: DividerComponent) => ({
  props: args,
});

export const Principal = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Principal.args = {
  type: 'horizontal',
};
