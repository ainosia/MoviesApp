import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';

// Servicios
import { PelisService } from './services/pelis.service';

// Rutas
import { APP_ROUTING } from './app.routes';

// Pipes
import { ImagenesPipe } from './pipes/imagenes.pipe';

// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { GaleriaComponent } from './components/home/galeria.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscarComponent,
    NavbarComponent,
    PeliculaComponent,
    ImagenesPipe,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [
    PelisService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
