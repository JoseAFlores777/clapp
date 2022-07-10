import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClappComponent } from './clapp.component';
import { IconButtonComponent } from './components/buttons/icon-button/icon-button.component';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { SidebarContextComponent } from './patterns/sidebar-context/sidebar-context.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    ClappComponent,
    IconButtonComponent,
    SvgIconComponent,
    SidebarContextComponent,

  ],
  imports: [
     CommonModule,
    
  ],
  exports: [
    ClappComponent,
    IconButtonComponent,
    SvgIconComponent,
    SidebarContextComponent
  ]
})
export class ClappModule { }
