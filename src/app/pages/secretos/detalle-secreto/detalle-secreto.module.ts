import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleSecretoPageRoutingModule } from './detalle-secreto-routing.module';

import { DetalleSecretoPage } from './detalle-secreto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleSecretoPageRoutingModule
  ],
  declarations: [DetalleSecretoPage]
})
export class DetalleSecretoPageModule {}
