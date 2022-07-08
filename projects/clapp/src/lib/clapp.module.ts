import { NgModule } from '@angular/core';
import { ClappComponent } from './clapp.component';
import { IconButtonComponent } from './components/buttons/icon-button/icon-button.component';
import { SidebarComponent } from './patterns/sidebar/sidebar.component';
import { PrimaryButtonComponent } from './components/buttons/primary-button/primary-button.component';
import { ButtonComponent } from './components/button/button.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ClappComponent,
    IconButtonComponent,
    SidebarComponent,
    PrimaryButtonComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule
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
