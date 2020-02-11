import { ReceptionComponent } from './reception/reception.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    
},
{
  path: 'home',
  pathMatch: 'full',
  component: HomeComponent
},{
  path: 'reception',
  pathMatch: 'full',
  component: ReceptionComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
