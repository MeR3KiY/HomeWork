import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FruitsComponent } from './fruits.component';
import { FruitsRoutingModule } from './fruits-routing.module';
import { FormsModule } from '@angular/forms';
import { FruitFilterPipe } from './pipes/fruit-filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { DollarPipe } from './pipes/dollar.pipe';



@NgModule({
  declarations: [
    FruitsComponent,
    FruitFilterPipe,
    DollarPipe
  ],
  imports: [
    CommonModule,
    FruitsRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class FruitsModule { }
