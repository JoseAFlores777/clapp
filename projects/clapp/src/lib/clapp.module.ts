import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClappComponent } from './clapp.component';
import { ButtonComponent } from './components/button/button.component';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { AvatarComponent } from './components/avatar/avatar.component';

import { SidebarContextComponent } from './patterns/sidebar-context/sidebar-context.component';
import { NavLinkComponent } from './components/nav-link/nav-link.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ClappComponent,
    SvgIconComponent,
    AvatarComponent,
    SidebarContextComponent,
    NavLinkComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ClappComponent,
    SvgIconComponent,
    AvatarComponent,
    SidebarContextComponent,
    NavLinkComponent,
    ButtonComponent,
  ],
})
export class ClappModule { }
