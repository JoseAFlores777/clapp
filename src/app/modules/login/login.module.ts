import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GatekeeperComponent } from './pages/gatekeeper/gatekeeper.component';
import { EndorsementComponent } from './pages/endorsement/endorsement.component';
import { ClappModule } from 'clapp';




@NgModule({
  declarations: [
    GatekeeperComponent,
    EndorsementComponent
  ],
  imports: [
    CommonModule,
    ClappModule
  ],
  exports: [
    GatekeeperComponent,
    EndorsementComponent
  ]
})
export class LoginModule { }
