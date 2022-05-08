import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../redesign/pages/profile/profile.component';
import { RedesignComponent } from '../redesign/redesign.component';
import { FruitsComponent } from './fruits.component';

const routes: Routes = [
  { path: '', component: FruitsComponent },
  { path: 'redesign', component: RedesignComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FruitsRoutingModule { }
