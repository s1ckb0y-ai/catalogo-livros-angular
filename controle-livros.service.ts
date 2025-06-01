import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  private livros: Array<Livro> = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: 'Dom Casmurro',
      resumo: 'Bentinho conta sua vida e o possível adultério de Capitu, sua esposa. Um clássico da literatura brasileira que explora ciúmes, dúvida e memória.',
      autores: [' Machado de Assis'],
      id: 0
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: '1984 ',
      resumo: 'Um romance distópico sobre um regime totalitário que controla todos os aspectos da vida. Winston Smith tenta resistir ao "Grande Irmão" e busca a liberdade em um mundo opressor.',
      autores: ['George Orwell'],
      id: 0
    },
    {
      codigo: 3,
      codEditora: 3,
      titulo: 'O Pequeno Príncipe',
      resumo: 'Um piloto encontra um pequeno príncipe de outro planeta e ouve suas reflexões sobre amor, amizade e a vida adulta. Um conto poético e filosófico.',
      autores: ['Antoine de Saint-Exupéry'],
      id: 0
    }
  ];

  obterLivros = () => this.livros;

  incluir = (livro: Livro) => {
    const novoCodigo = Math.max(...this.livros.map(l => l.codigo)) + 1;
    livro.codigo = novoCodigo;
    this.livros.push(livro);
  };

  excluir = (codigo: number) => {
    const index = this.livros.findIndex(l => l.codigo === codigo);
    if (index >= 0) this.livros.splice(index, 1);
  };
}

