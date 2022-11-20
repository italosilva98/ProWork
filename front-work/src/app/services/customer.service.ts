import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  dadosPessoais = {
    nome: 'Qualquer Nome Moock',
    idade: '26 anos',
    sexo: 'Masculino',
    exercicio: 'Sim, academia 5x / semana',
    cirurgia: 'Não',
    medicamentos: 'Não',
    cancer: 'Não',
    corona: 'Não',
  };

  enderecoContato = {
    logradouro: "Avenida Brasil",
    numero: "153",
    complemento: "apto 501",
    bairro: "Jardim brasil",
    cep: "00000-000",
    cidade: "São Paulo",
    estado: "SP",
    email: "email@email.com",
    telefone: "(55)9999-9999",
    celular: "(55)99999-9999"
  }
  
  constructor() {}

  getDadosPessoais(){
    return this.dadosPessoais
  }

  getEnderecoContato(){
    return this.enderecoContato
  }
}
