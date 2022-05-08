import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  { path: 'netmonet', loadChildren: ()=>import('./netmonet/netmonet.module').then (m => m.NetmonetModule) }, //lazy-loading
  { path: 'fruits', loadChildren: ()=>import('./fruits/fruits.module').then (m => m.FruitsModule) },
  { path: 'redesign', loadChildren: ()=>import('./redesign/redesign.module').then (m => m.RedesignModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
