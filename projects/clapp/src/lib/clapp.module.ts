import { NgModule } from '@angular/core';
import { ClappComponent } from './clapp.component';
import { IconButtonComponent } from './components/buttons/icon-button/icon-button.component';
import { SidebarComponent } from './patterns/sidebar/sidebar.component';
import { PrimaryButtonComponent } from './components/buttons/primary-button/primary-button.component';
import { ButtonComponent } from './components/button/button.component';



@NgModule({
  declarations: [
    ClappComponent,
    IconButtonComponent,
    SidebarComponent,
    PrimaryButtonComponent,
    ButtonComponent,
  ],
  imports: [
  ],
  exports: [
    ClappComponent,
    IconButtonComponent,
    SidebarComponent,
    PrimaryButtonComponent,
    ButtonComponent,
  ]
})
export class ClappModule { }
