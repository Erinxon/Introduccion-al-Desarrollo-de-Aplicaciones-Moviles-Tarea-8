import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecretosPageRoutingModule } from './secretos-routing.module';

import { SecretosPage } from './secretos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecretosPageRoutingModule
  ],
  declarations: [SecretosPage]
})
export class SecretosPageModule {}
