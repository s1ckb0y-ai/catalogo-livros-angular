import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ControleLivrosService } from '../controle-livros.service';
import { Livro } from '../livro';

@Component({
  selector: 'app-livro-lista',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './livro-lista.component.html'
})
export class LivroListaComponent {

  livros: Livro[] = [];

  constructor(private controleLivros: ControleLivrosService) {}

  async ngOnInit() {
    this.livros = await this.controleLivros.obterLivros();
  }

  async excluir(codigo: number) {
    await this.controleLivros.excluir(codigo.toString());
    this.livros = await this.controleLivros.obterLivros();
  }
}

