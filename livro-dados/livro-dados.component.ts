import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Livro } from '../livro';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-dados',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './livro-dados.component.html'
})
export class LivroDadosComponent {
  livro: Livro = new Livro();
  autoresTexto: string = '';

  constructor(
    private controleLivros: ControleLivrosService,
    private router: Router
  ) {}

  async incluir() {
    this.livro.autores = this.autoresTexto.split(',').map(a => a.trim());
    await this.controleLivros.incluir(this.livro);
    this.router.navigate(['/lista']);
  }
}
