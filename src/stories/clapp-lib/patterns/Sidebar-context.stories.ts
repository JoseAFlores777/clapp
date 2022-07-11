// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';

import { ClappIcons, IconFill } from '../../../../projects/clapp/src/lib/components/svg-icon/clapp-icons.helper';
import { SidebarContextComponent } from '../../../../projects/clapp/src/lib/patterns/sidebar-context/sidebar-context.component';
import { SvgIconComponent } from '../../../../projects/clapp/src/lib/components/svg-icon/svg-icon.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Clapp-Lib/patterns/cl-sidebar-context',
  component: SidebarContextComponent,
  decorators: [
    moduleMetadata({
      declarations: [SvgIconComponent],
      imports: [CommonModule, BrowserAnimationsModule],
    }),
  ],
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    isCollapsed: {
      options: [true, false],
      control: { type: 'boolean' },
    },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<SidebarContextComponent> = (args: SidebarContextComponent) => ({
  props: args,
  template: `<cl-sidebar-context>
    <ng-container content>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type 
    specimen book. It has survived not only five centuries, but also the leap into 
    electronic typesetting, remaining essentially unchanged. It was popularised in 
    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
    and more recently with desktop publishing software like Aldus PageMaker including 
    versions of Lorem Ipsum.
    </ng-container>
  </cl-sidebar-context>`,
  styles: [
    `
    :host {
      font-family: 'Avenir Next';
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
    }
    `,
  ],
});

export const Principal = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Principal.args = {
  isCollapsed: false,
};
