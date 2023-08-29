import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimerPaginaComponent } from './Components/primer-pagina/primer-pagina.component';
import { SegundapaginaComponent } from './Components/segundapagina/segundapagina.component';
import { AgregarTareaComponent } from './Components/agregar-tarea/agregar-tarea.component';
import { ListaTareasServerComponent } from './Components/lista-tareas-server/lista-tareas-server.component';
import { ListaTareasComponent } from './Components/lista-tareas/lista-tareas.component';
import { ModificarTareaComponent } from './Components/modificar-tarea/modificar-tarea.component';
import { AgregarTareaReactiveComponent } from './Components/reactive/agregar-tarea-reactive/agregar-tarea-reactive.component';
import { ListaTareasServerReactiveComponent } from './Components/reactive/lista-tareas-server-reactive/lista-tareas-server-reactive.component';
import { ModificarTareaReactiveComponent } from './Components/reactive/modificar-tarea-reactive/modificar-tarea-reactive.component';
import { MipaginaprincipalComponent } from './mipaginaprincipal/mipaginaprincipal.component';

const routes: Routes = [
  { path: 'primer-pagina', component: PrimerPaginaComponent },
  { path: 'segunda-pagina', component: SegundapaginaComponent },
  {path:"agregar-tarea", component: AgregarTareaComponent},
  {path:"modificar-tarea/:id", component: ModificarTareaComponent},
  {path:"lista-tareas", component: ListaTareasComponent},
  {path:"lista-tareas-server", component: ListaTareasServerComponent},
  {path:"lista-tareas-server-reactive", component: ListaTareasServerReactiveComponent},
  {path:"modificar-tarea-reactive/:id", component: ModificarTareaReactiveComponent},
  {path:"agregar-tarea-reactive", component: AgregarTareaReactiveComponent},
  { path: "**", component: MipaginaprincipalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
