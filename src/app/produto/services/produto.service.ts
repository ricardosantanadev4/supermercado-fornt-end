import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private readonly produtoUrl = '/api/produto';

  constructor(private http: HttpClient) { }

  getProduto() {
    return this.http.get<Produto[]>(this.produtoUrl);
  }
}
