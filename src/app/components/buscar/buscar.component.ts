import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PelisService } from '../../services/pelis.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent {

  buscar:string = '';

  constructor(public _pelisService:PelisService,
              public route:ActivatedRoute) {
    this.route.params.subscribe( parametros => {
      if (parametros['texto']) {
        this.buscar = parametros['texto'];
        this.searchFilm();
      }
    })
  }

  searchFilm() {
    if (this.buscar.length === 0) {
      return;
    }
    this._pelisService.buscarPelicula(this.buscar).subscribe();
  }


}
