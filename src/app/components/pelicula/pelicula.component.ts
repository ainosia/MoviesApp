import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PelisService } from '../../services/pelis.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  pelicula:any;
  volverA:string = "";
  busqueda:string = "";

  constructor(public _pelisService:PelisService,
              public route:ActivatedRoute) {
    this.route.params.subscribe( parametros => {
      console.log(parametros);
      this.volverA = parametros['pag'];
      if (parametros['busqueda']) {
        this.busqueda = parametros['busqueda'];
      }
      this._pelisService.getPelicula(parametros['id']).subscribe(pelicula => this.pelicula = pelicula)
    })
  }

  ngOnInit() {
  }

}
