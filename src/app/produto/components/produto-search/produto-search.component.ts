import { Component } from '@angular/core';

@Component({
  selector: 'app-produto-search',
  templateUrl: './produto-search.component.html',
  styleUrls: ['./produto-search.component.scss']
})
export class ProdutoSearchComponent {

  onKeydown(event?: Event) {
    console.log(event);
  }
}
