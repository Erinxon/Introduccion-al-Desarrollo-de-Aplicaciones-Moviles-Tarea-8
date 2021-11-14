import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'secretos',
    pathMatch: 'full'
  },
  {
    path: 'secretos',
    loadChildren: () => import('./pages/secretos/secretos.module').then( m => m.SecretosPageModule)
  },
  {
    path: 'agregar-secreto',
    loadChildren: () => import('./pages/agregar-secreto/agregar-secreto.module').then( m => m.AgregarSecretoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
