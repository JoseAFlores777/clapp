import { NgModule } from '@angular/core';
import { ClappComponent } from './clapp.component';
import { IconButtonComponent } from './components/buttons/icon-button/icon-button.component';
import { SidebarComponent } from './patterns/sidebar/sidebar.component';



@NgModule({
  declarations: [
    ClappComponent,
    IconButtonComponent,
    SidebarComponent
  ],
  imports: [
  ],
  exports: [
    ClappComponent,
    IconButtonComponent,
    SidebarComponent
  ]
})
export class ClappModule { }
