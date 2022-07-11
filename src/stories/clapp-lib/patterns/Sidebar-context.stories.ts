// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavLinkComponent } from '../../../../projects/clapp/src/lib/components/nav-link/nav-link.component';
import { SvgIconComponent } from '../../../../projects/clapp/src/lib/components/svg-icon/svg-icon.component';
import { SidebarContextComponent } from '../../../../projects/clapp/src/lib/patterns/sidebar-context/sidebar-context.component';


export default {
  title: 'Clapp-Lib/patterns/cl-sidebar-context',
  component: SidebarContextComponent,
  decorators: [
    moduleMetadata({
      declarations: [SvgIconComponent, NavLinkComponent],
      imports: [CommonModule, BrowserAnimationsModule],
    }),
  ],
  argTypes: {
    isCollapsed: {
      options: [true, false],
      control: { type: 'boolean' },
    },
  },
} as Meta;

const Template: Story<SidebarContextComponent> = (args: SidebarContextComponent) => ({
  props: args,
  template: `
  <cl-sidebar-context>

  <ng-container sidebarHeader>
    <cl-svg-icon [icon]="'gatekeeper'" [fill]="'ApplaudoRed'"></cl-svg-icon>
  </ng-container>

  <ng-container sidebarContent>
    <cl-nav-link [icon]="'account'" text="account" [showText]="!isCollapsed"></cl-nav-link>
    <cl-nav-link [icon]="'admin'" text="admin" [showText]="!isCollapsed"></cl-nav-link>
    <cl-nav-link [icon]="'awardFill'" text="awardFill" [showText]="!isCollapsed"></cl-nav-link>
    <cl-nav-link [icon]="'calendar'" text="calendar" [showText]="!isCollapsed"></cl-nav-link>
  </ng-container>

  <ng-container sidebarFooter>
    <cl-nav-link [icon]="'logOut'" text="Log Out" [showText]="!isCollapsed"></cl-nav-link>
  </ng-container>

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
      min-height: 200px;
    }
    `,
  ],
});

export const Principal = Template.bind({});

Principal.args = {
  isCollapsed: false,
};
