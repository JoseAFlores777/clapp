import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GatekeeperComponent } from './pages/gatekeeper/gatekeeper.component';
import { EndorsementComponent } from './pages/endorsement/endorsement.component';



@NgModule({
  declarations: [
    GatekeeperComponent,
    EndorsementComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
