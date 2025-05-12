import { Component,  EventEmitter,Output } from '@angular/core';
import { Tarea } from '../tarea.interface';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-task-item-component',
  imports: [FormsModule],
  templateUrl: './task-item-component.component.html',
  styleUrl: './task-item-component.component.css'
})

export class TaskItemComponentComponent {

@Output() 
emitirTarea: EventEmitter<Tarea> = new EventEmitter();
eliminarTarea: EventEmitter<Tarea> = new EventEmitter();
onchekTarea: EventEmitter<Tarea> = new EventEmitter();


tarea: Tarea = {
  id:1,
   nombre:'',
   estado:false
}

addTarea(){
  console.log(this.tarea)
  this.emitirTarea.emit({...this.tarea})

}

onDelete() {
  console.log(this.tarea)
  this.eliminarTarea.emit(this.tarea)
}

onCheck() {
  console.log(this.tarea);
  this.onchekTarea.emit(this.tarea)
}



}
