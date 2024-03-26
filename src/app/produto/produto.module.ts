import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoListComponent } from './components/produto-list/produto-list.component';
import { ProdutoComponent } from './containers/produto/produto.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';


@NgModule({
  declarations: [
    ProdutoListComponent,
    ProdutoComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    AppMaterialModule
  ]
})
export class ProdutoModule { }
