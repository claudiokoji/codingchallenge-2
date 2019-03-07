import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lances',
  templateUrl: './lances.component.html',
  styleUrls: ['./lances.component.scss']
})
export class LancesComponent implements OnInit {

  lances = [
    { label: 'Leilões Participados', type: 'warning', value: '47' },
    { label: 'Lances Realizados', type: 'success', value: '94' },
    { label: 'Leilões Vencidos', type: 'warning', value: '8' },
    { label: 'Reais em Lances', type: 'success', value: 'R$ 9.231' },
    { label: 'Reais em Prejuízo', type: 'danger', value: 'R$ 29' }
  ];

  userData = {
    'name': 'Lance Livre',
    'email': 'usuario@totvs.com.br',
    'photo': 'avatar2.png'
  };

  constructor() { }

  ngOnInit() {
  }

}
