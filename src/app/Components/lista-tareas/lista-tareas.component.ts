import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { TareaModel } from '../../models/tarea.model';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {

  tareas: TareaModel[] = [ new TareaModel(1,new Date(), "EStudiar Angular"),
                          new TareaModel(2,new Date(),"Aprobar Angular"),
                          new TareaModel(3,new Date(),"Aprobar Regularidad"),
                          new TareaModel(4,new Date(),"Aprobar Examen Final")

  ];
  constructor() { }

  ngOnInit(): void {
  }

  eliminarTarea(identificador:number){
    alert("Desea Eliminar la tarea");
    console.log(identificador);
    this.tareas = this.tareas.filter(item => item.id != identificador);
  }

  agregarTarea(nombre:string){
     if (nombre.length>0){
      let tareaNueva = new TareaModel(TareaModel.utlimo_id+1,new Date(), nombre);
      this.tareas = [...this.tareas,tareaNueva];
    }
  }

  nombreTareaNueva:string = "";
  otraFormaAgregarTarea(){
    if (this.nombreTareaNueva.length>0){
      let tareaNueva = new TareaModel(TareaModel.utlimo_id+1,new Date(), this.nombreTareaNueva);
      this.tareas.unshift(tareaNueva);
    }
  }
  onInputChange(evt:any){
    this.nombreTareaNueva = evt.target.value;
  }

  prepararModificar(id:number , titulo: string){

      Swal.fire({
        title: 'Tarea '+titulo,
        text: 'Introduce el Titulo aquí',
        input: 'text',
        inputPlaceholder: 'Titulo',

        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {

          this.modificarTarea(id,result.value);
        }
      });

  }

  modificarTarea(id: number, titulox: string){
    let elementIndex = this.tareas.findIndex((obj => obj.id == id));
    console.log(elementIndex);
    this.tareas[elementIndex].titulo = titulox;
  }

}
