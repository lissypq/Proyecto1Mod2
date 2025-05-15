import { Component,  EventEmitter,inject,Output } from '@angular/core';
import { Tarea } from '../tarea.interface';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-item-component',
  standalone: true, 
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './task-item-component.component.html',
  styleUrl: './task-item-component.component.css'
})

export class TaskItemComponentComponent {

@Output() 
emitirTarea: EventEmitter<Tarea> = new EventEmitter();
eliminarTarea: EventEmitter<Tarea> = new EventEmitter();



tarea: Tarea = {
  id:0,
  nombre:''

}


fb =inject(FormBuilder)
formularios = this.fb.nonNullable.group({
  id: [0, Validators.required],
  nombre: ['', Validators.required, Validators.minLength(3)]
 
})



addTarea(){

   if (this.formularios.valid)return; 

   const tareas=  this.formularios.getRawValue()
  this.emitirTarea.emit(tareas)
    console.log(this.tarea)

}


onDelete() {

  this.eliminarTarea.emit(this.tarea)
  console.log(this.tarea)
  
}





}
