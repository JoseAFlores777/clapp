import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GatekeeperComponent } from './modules/login/pages/gatekeeper/gatekeeper.component';
import { EndorsementComponent } from './modules/login/pages/endorsement/endorsement.component';

const routes: Routes = [
  {
    path: 'gatekeeper',
    component: GatekeeperComponent,
  },
  {
    path: 'endorsement',
    component: EndorsementComponent
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: '',
    redirectTo: 'gatekeeper',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'gatekeeper'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
