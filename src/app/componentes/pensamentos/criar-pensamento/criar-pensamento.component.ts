import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  formulario: FormGroup;

  ngOnInit(): void {
    this.formulario = this.FormBuilder.group({
      conteudo: ['Formulario reativo'],
      autoria: ['Autoria Reativa'],
      modelo: ['modelo1']
    })
  };

  constructor(
    private service: PensamentoService,
    private router: Router,
    private FormBuilder: FormBuilder
    ) {};

  criarPensamento() {
    this.service.criar(this.formulario.value).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })
  }

  cancelarPensamento() {
    this.router.navigate(['/listarPensamento'])
  }

}
