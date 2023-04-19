import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DetailsPageComponent } from './details-page/details-page.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'productDetails',component:DetailsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
