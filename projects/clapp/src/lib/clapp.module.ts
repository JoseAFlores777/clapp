import { NgModule } from '@angular/core';
import { ClappComponent } from './clapp.component';
import { IconButtonComponent } from './components/buttons/icon-button/icon-button.component';
import { SidebarComponent } from './patterns/sidebar/sidebar.component';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';



@NgModule({
  declarations: [
    ClappComponent,
    IconButtonComponent,
    SidebarComponent,
    SvgIconComponent,

  ],
  imports: [
  ],
  exports: [
    ClappComponent,
    IconButtonComponent,
    SidebarComponent,
    SvgIconComponent
  ]
})
export class ClappModule { }
