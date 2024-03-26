import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'produto',
    loadChildren: () => import('./produto/produto.module').then(m => m.ProdutoModule)
  },
  {
    path: '',
    redirectTo: 'produto',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
