import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [

  {
    component: UserAuthComponent,
    path: 'user-auth',

  },
  {
    component: UserHomeComponent,
    path: 'user-home',

  }

];


@NgModule({
  declarations: [

    UserAuthComponent,
    UserHomeComponent
  ],
  imports: [

    CommonModule,
    RouterModule.forChild(routes),
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class UserModule { }
