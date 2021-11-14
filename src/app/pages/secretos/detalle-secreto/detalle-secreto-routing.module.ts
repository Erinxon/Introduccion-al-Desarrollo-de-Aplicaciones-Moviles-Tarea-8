import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleSecretoPage } from './detalle-secreto.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleSecretoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleSecretoPageRoutingModule {}
