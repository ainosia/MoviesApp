import { Component } from '@angular/core';
import { PelisService } from './services/pelis.service';

import { NavbarComponent } from './components/shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {}

  // constructor(public _ps:PelisService) {
  //   this._ps.getPopulares().subscribe(data => console.log(data));
  //   this._ps.getCartelera().subscribe(data => console.log(data));
  //   this._ps.getInfantil().subscribe(data => console.log(data));
  // }
}
