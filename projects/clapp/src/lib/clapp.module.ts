import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClappComponent } from './clapp.component';
import { IconButtonComponent } from './components/buttons/icon-button/icon-button.component';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { SidebarContextComponent } from './patterns/sidebar-context/sidebar-context.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavLinkComponent } from './components/nav-link/nav-link.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ClappComponent,
    IconButtonComponent,
    SvgIconComponent,
    SidebarContextComponent,
    NavLinkComponent,

  ],
  imports: [
     CommonModule,
     RouterModule
  ],
  exports: [
    ClappComponent,
    IconButtonComponent,
    SvgIconComponent,
    SidebarContextComponent,
    NavLinkComponent,
  ]
})
export class ClappModule { }
