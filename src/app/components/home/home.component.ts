import { Component, OnInit } from '@angular/core';

import { PelisService } from '../../services/pelis.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  cartelera:any;
  populares:any;
  infantil:any;

  constructor(public _ps:PelisService) {
    this._ps.getPopulares().subscribe(data => console.log(data));
    this._ps.getCartelera().subscribe(data => this.cartelera = data);
    this._ps.getPopulares().subscribe(data => this.populares = data);
    this._ps.getInfantil().subscribe(data => this.infantil = data);
  }

  ngOnInit() {
  }

}
