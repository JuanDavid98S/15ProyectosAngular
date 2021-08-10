import { Component, OnInit } from '@angular/core';
import { Tarea } from '../../models/Tarea';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

  listaTareas: Tarea[] = []
  nombreTarea: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea(): void {
    //Crear objeto Tarea
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }
    //Agregar tarea al arreglo
    this.listaTareas.push(tarea)

    //Reiniciar el input
    this.nombreTarea = ''
  }

  eliminarTarea(index: number): void {
    this.listaTareas.splice(index, 1)
  }

  actualizarTarea(tarea: Tarea, index: number): void {
    this.listaTareas[index].estado = !tarea.estado
  }
}
