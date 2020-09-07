import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    FormsModule,
    MatMenuModule,
    MatIconModule,
  ],
})
export class HomeModule {}
