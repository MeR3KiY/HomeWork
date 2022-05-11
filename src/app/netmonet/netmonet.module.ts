import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNetmonetComponent } from './pages/main-netmonet/main-netmonet.component';
import { HeaderNetmonetComponent } from './components/header-netmonet/header-netmonet.component';
import { EmplraddNetmonetComponent } from './components/emplradd-netmonet/emplradd-netmonet.component';
import { EmplrlistNetmonetComponent } from './components/emplrlist-netmonet/emplrlist-netmonet.component';
import { Page1Component } from './pages/page1/page1.component';
import { NetmonetRoutingModule } from './netmonet-routing.module';
import { NetmonetComponent } from './netmonet.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';
import { NotificationComponent } from './components/notification/notification.component';



@NgModule({
  declarations: [
    MainNetmonetComponent,
    HeaderNetmonetComponent,
    EmplraddNetmonetComponent,
    EmplrlistNetmonetComponent,
    Page1Component,
    NetmonetComponent,
    SearchPipe,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    NetmonetRoutingModule,
    FormsModule
  ]
})
export class NetmonetModule { }
