import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecretosPage } from './secretos.page';

const routes: Routes = [
  {
    path: '',
    component: SecretosPage
  },
  {
    path: 'detalle-secreto/:id',
    loadChildren: () => import('../secretos/detalle-secreto/detalle-secreto.module').then( m => m.DetalleSecretoPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecretosPageRoutingModule {}
