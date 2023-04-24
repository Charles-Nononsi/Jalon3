import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PharmacienAddProductComponent } from './pharmacien-add-product/pharmacien-add-product.component';
import { PharmacienAuthComponent } from './pharmacien-auth/pharmacien-auth.component';
import { PharmacienHomeComponent } from './pharmacien-home/pharmacien-home.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
{
    component: PharmacienHomeComponent,
    path: 'pharmacien-home',
    canActivate: [AuthGuard]
  },
  {
    component: PharmacienAuthComponent,
    path: 'pharmacien-auth',
  },
  
  {
    component: PharmacienAddProductComponent,
    path: 'pharmacien-add-product',
    canActivate: [AuthGuard]
  }

];

@NgModule({
  declarations: [
PharmacienHomeComponent,
  PharmacienAddProductComponent,
  PharmacienAuthComponent
  
  ],
  imports: [

    CommonModule,
    RouterModule.forChild(routes),
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class PharmacienModule { }
