import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ProfileSimpleComponent } from './pages/profile-simple/profile-simple.component';
import { ProfileWithCommentsComponent } from './pages/profile-with-comments/profile-with-comments.component';
import { HomeMainComponent } from './pages/home-main/home-main.component';
import { ClappModule } from 'clapp';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    ProfileSimpleComponent,
    ProfileWithCommentsComponent,
    HomeMainComponent
  ],
  imports: [
     CommonModule,
    HomeRoutingModule,
    ClappModule
  ],
  exports: []
})
export class HomeModule { }
