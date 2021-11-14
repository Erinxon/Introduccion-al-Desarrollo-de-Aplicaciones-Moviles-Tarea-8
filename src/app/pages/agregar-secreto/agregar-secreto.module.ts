import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarSecretoPageRoutingModule } from './agregar-secreto-routing.module';

import { AgregarSecretoPage } from './agregar-secreto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AgregarSecretoPageRoutingModule
  ],
  declarations: [AgregarSecretoPage]
})
export class AgregarSecretoPageModule {}
