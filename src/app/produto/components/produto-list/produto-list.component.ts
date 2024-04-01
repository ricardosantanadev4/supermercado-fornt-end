import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../../models/produto';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.scss']
})
export class ProdutoListComponent {
  @Input() newProdutoListEvent$!: Observable<Produto[]>;
  displayedColumns: string[] = ['id', 'nome', 'categoria', 'valor', 'fabricante', 'validade'];
}
