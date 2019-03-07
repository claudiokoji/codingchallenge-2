import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meus-leiloes',
  templateUrl: './meus-leiloes.component.html',
  styleUrls: ['./meus-leiloes.component.scss']
})

export class MeusLeiloesComponent implements OnInit {

  showMoreDisabled = false;

  data: Array<any> = [
    {
      title: 'Nome do Leilão', register: '22/03/2017', mail: 'usuario@totvs.com.br',
      updated: '22/10/2017 as 04:20'
    },
    {
      title: 'Nome do Leilão', register: '21/03/2017', mail: 'usuario@totvs.com.br',
      updated: '16/10/2017 as 04:20'
    },
    {
      title: 'Nome do Leilão', register: '22/03/2017', mail: 'usuario@totvs.com.br',
      updated: '22/10/2017 as 04:20'
    },
    {
      title: 'Nome do Leilão', register: '22/03/2017', mail: 'usuario@totvs.com.br',
      updated: '22/10/2017 as 04:20'
    }
  ];

  
    eventsObject2: Array<any> = [{ 'label': 'Editar', 'function': 'onClick1' },
  { 'label': 'Excluir', 'function': 'onClick2' },
  { 'label': 'Clonar', 'function': 'onClick3' }];

  
  showMoreFunction() {
    this.data.push({
      title: 'Nome do Leilão', register: '10/08/2017',
      mail: 'marcos.figueira@email.com.br', updated: '01/08/2017 as 14:28'
    });
    this.showMoreDisabled = true;
  }

  userData = {
    'name': 'Lance Livre',
    'email': 'usuario@totvs.com.br',
    'photo': 'avatar2.png'
  };
  
  ngOnInit() {
  }
}
