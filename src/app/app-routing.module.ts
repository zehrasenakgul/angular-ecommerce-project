import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddForms1Component } from './product/product-add-forms1/product-add-forms1.component';
import { ProductAddForms2Component } from './product/product-add-forms2/product-add-forms2.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { loginGuard } from './login/login.guard';
const newLocal = 'products/category/:categoryId';

const routes: Routes = [
  { path: 'products', component: ProductComponent },
  { path: 'product-add-forms1', component: ProductAddForms1Component , canActivate:[loginGuard]},
  { path: 'product-add-forms2', component: ProductAddForms2Component , canActivate:[loginGuard] },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: newLocal, component: ProductComponent },
  { path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
