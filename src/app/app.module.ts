import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PrimerPaginaComponent } from './Components/primer-pagina/primer-pagina.component';
import { SegundapaginaComponent } from './Components/segundapagina/segundapagina.component';
import { FooterComponent } from './footer/footer.component';
import { ContenidoinicialComponent } from './contenidoinicial/contenidoinicial.component';
import { MipaginaprincipalComponent } from './mipaginaprincipal/mipaginaprincipal.component';
import { ListaTareasComponent } from './Components/lista-tareas/lista-tareas.component';
import { ModificarTareaComponent } from './Components/modificar-tarea/modificar-tarea.component';
import { ListaTareasServerComponent } from './Components/lista-tareas-server/lista-tareas-server.component';
import { AgregarTareaComponent } from './Components/agregar-tarea/agregar-tarea.component';
import { ListaTareasServerReactiveComponent } from './Components/reactive/lista-tareas-server-reactive/lista-tareas-server-reactive.component';
import { AgregarTareaReactiveComponent } from './Components/reactive/agregar-tarea-reactive/agregar-tarea-reactive.component';
import { ModificarTareaReactiveComponent } from './Components/reactive/modificar-tarea-reactive/modificar-tarea-reactive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CabeceraComponent } from './Components/cabecera/cabecera.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PrimerPaginaComponent,
    SegundapaginaComponent,
    FooterComponent,
    ContenidoinicialComponent,
    MipaginaprincipalComponent,
    ListaTareasComponent,
    ModificarTareaComponent,
    ListaTareasServerComponent,
    AgregarTareaComponent,
    ListaTareasServerReactiveComponent,
    AgregarTareaReactiveComponent,
    ModificarTareaReactiveComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
