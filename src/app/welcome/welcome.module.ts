import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  // { path: '', loadChildren: () => import(`./welcome/welcome.module`).then(m => m.WelcomeModule) },
  { path: '', component: WelcomeComponent },
];


@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class WelcomeModule { }
