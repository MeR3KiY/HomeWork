import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedesignComponent } from './redesign.component';
import { RedesignRoutingModule } from './redesign-routing.module';
import {  MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { ProfileComponent } from './pages/profile/profile.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    RedesignComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RedesignRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSelectModule
  ]
})
export class RedesignModule { }
