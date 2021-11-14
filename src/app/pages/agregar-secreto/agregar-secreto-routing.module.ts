import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarSecretoPage } from './agregar-secreto.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarSecretoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarSecretoPageRoutingModule {}
