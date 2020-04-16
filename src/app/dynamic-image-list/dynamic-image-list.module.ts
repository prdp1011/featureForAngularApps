import { DynamicImageListComponent } from './dynamic-image-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './components/presentationals/card/card.component';
import { GridComponent } from './components/containers/grid/grid.component';
import { CardShimmerComponent } from './components/presentationals/card-shimmer/card-shimmer.component';


const routes: Routes = [
  // { path: '', loadChildren: () => import(`./welcome/welcome.module`).then(m => m.WelcomeModule) },
  { path: '', component: DynamicImageListComponent },
];

@NgModule({
  declarations: [DynamicImageListComponent,
    CardComponent,
    GridComponent,
    CardShimmerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class DynamicImageListModule { }
