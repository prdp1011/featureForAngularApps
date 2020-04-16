import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{ path: '', loadChildren: () => import(`./welcome/welcome.module`).then(m => m.WelcomeModule) },
{ path: 'form', loadChildren: () => import(`./dynamic-form/app-dynamic-form.module`).then(m => m.DynamicFormModule) },
{ path: 'lists', loadChildren: () => import(`./dynamic-image-list/dynamic-image-list.module`).then(m => m.DynamicImageListModule) },

{ path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
