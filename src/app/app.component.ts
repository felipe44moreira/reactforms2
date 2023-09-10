import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dadosFormulario = {
    nome: '',
    email: ''
  };

  formularioEnviado = false;
  listaDeDados: any[] = []; 

  enviarFormulario() {
    this.listaDeDados.push({ nome: this.dadosFormulario.nome, email: this.dadosFormulario.email });

  
    this.dadosFormulario.nome = '';
    this.dadosFormulario.email = '';

    this.formularioEnviado = true;
  }
}
