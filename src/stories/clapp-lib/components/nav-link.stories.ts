// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { SvgIconComponent } from '../../../../projects/clapp/src/lib/components/svg-icon/svg-icon.component';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';

import { ClappIcons, IconFill } from '../../../../projects/clapp/src/lib/components/svg-icon/clapp-icons.helper';
import { NavLinkComponent } from '../../../../projects/clapp/src/lib/components/nav-link/nav-link.component';
import { CommonModule } from '@angular/common';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Clapp-Lib/Components/cl-nav-link',
  component: NavLinkComponent,
  decorators: [
    moduleMetadata({
      declarations: [SvgIconComponent],
      imports: [CommonModule],
    }),
    componentWrapperDecorator(
      (story) =>
        `<div style="min-height: 200px; background-color: #011625; display: flex; justify-content: center;"><div style="align-self: center; justify-self: center;">${story}</div></div>`
    ),
  ],
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    icon: {
      options: Object.keys(ClappIcons),
      control: { type: 'select' },
    },
    fill: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<NavLinkComponent> = (args: NavLinkComponent) => ({
  props: args,
});

export const Principal = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Principal.args = {
  text: 'Principal',
  icon: 'account',
  fill: 'White',
};
