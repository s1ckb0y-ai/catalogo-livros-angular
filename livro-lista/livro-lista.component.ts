import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { ControleLivrosService } from '../controle-livros.service';
import { ControleEditoraService } from '../controle-editora.service';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  standalone: false,
})
export class LivroListaComponent implements OnInit {
  public livros: Livro[] = [];
  public editoras: Editora[] = [];

  constructor(
    private servLivros: ControleLivrosService,
    private servEditora: ControleEditoraService
  ) {}

  ngOnInit(): void {
    this.livros = this.servLivros.obterLivros();
    this.editoras = this.servEditora.getEditoras();
  }

  excluir = (codigo: number): void => {
    this.servLivros.excluir(codigo);
    this.livros = this.servLivros.obterLivros();
  };

  obterNome = (codEditora: number): string => {
    return this.servEditora.getNomeEditora(codEditora);
  };
}

