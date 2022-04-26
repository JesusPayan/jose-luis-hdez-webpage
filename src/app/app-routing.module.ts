import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';

const routes: Routes = [
  { path:'home', component:HomePageComponent},
  {path:'contact-us', component:ContactUsPageComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
