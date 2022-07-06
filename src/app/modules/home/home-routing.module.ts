import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMainComponent } from './pages/home-main/home-main.component';
import { ProfileSimpleComponent } from './pages/profile-simple/profile-simple.component';
import { ProfileWithCommentsComponent } from './pages/profile-with-comments/profile-with-comments.component';

const routes: Routes = [
  {
    path: '',
    component: HomeMainComponent,
    children: [
      {
        path: 'profile-simple',
        component: ProfileSimpleComponent
      },
      {
        path: 'profile-with-comments',
        component: ProfileWithCommentsComponent
      },
      {
        path: '',
        redirectTo: 'profile-simple',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'profile-simple'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
