import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Passo informações para componente filho',
      autoria: 'Componente Pai',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Minha propriedade é decorada com @input',
      autoria: 'Componente filho',
      modelo: 'modelo1'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
