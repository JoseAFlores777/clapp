import { NgModule } from '@angular/core';
import { ClappComponent } from './clapp.component';
import { IconButtonComponent } from './components/buttons/icon-button/icon-button.component';
import { SidebarComponent } from './patterns/sidebar/sidebar.component';
import { PrimaryButtonComponent } from './components/buttons/primary-button/primary-button.component';



@NgModule({
  declarations: [
    ClappComponent,
    IconButtonComponent,
    SidebarComponent,
    PrimaryButtonComponent,
  ],
  imports: [
  ],
  exports: [
    ClappComponent,
    IconButtonComponent,
    SidebarComponent,
    PrimaryButtonComponent,
  ]
})
export class ClappModule { }
