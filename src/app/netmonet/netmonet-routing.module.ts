import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NetmonetComponent } from './netmonet.component';
import { MainNetmonetComponent } from './pages/main-netmonet/main-netmonet.component';
import { Page1Component } from './pages/page1/page1.component';

const routes: Routes = [
  { path: '', component: NetmonetComponent, children: [
    {path: 'main', component: MainNetmonetComponent},
    {path: 'page1', component: Page1Component}
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NetmonetRoutingModule { }
