import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../../models/produto';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent {
  produto$!: Observable<Produto[]>;

  constructor(private produtoService: ProdutoService) {
    this.showProduto();
  }

  showProduto() {
    this.produto$ = this.produtoService.getProduto();
  }
}
