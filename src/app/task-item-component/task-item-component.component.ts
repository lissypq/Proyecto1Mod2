import { Component,  EventEmitter,inject,Output } from '@angular/core';
import { Tarea } from '../tarea.interface';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { TasksService } from '../tasks.service';
import { TasklistdetailComponent } from '../tasklistdetail/tasklistdetail.component';

@Component({
  selector: 'app-task-item-component',
  standalone: true, 
  imports: [ReactiveFormsModule],
  templateUrl: './task-item-component.component.html',
  styleUrl: './task-item-component.component.css'
})


export class TaskItemComponentComponent {

@Output() 
emitirTarea: EventEmitter<Tarea> = new EventEmitter();


fb =inject(FormBuilder)
tasksService = inject(TasksService)

tarea : Tarea = {
  id: 0,
  nombre: ''
}

formularios = this.fb.nonNullable.group(
  {
  id: [0, [Validators.required]],  
  nombre: ['', [ Validators.required, Validators.minLength(3)]] 
  }
)

addTarea(){

   if (this.formularios.invalid)return; 
   
    const tareas=  this.formularios.getRawValue()
    this.addTaskdb(tareas);
    this.emitirTarea.emit(tareas);

  

}

addTaskdb(tarea: Tarea) {
this.tasksService.posttask(tarea).subscribe( 
  {
      next: (tarea: Tarea) => {
        console.log(tarea);
        alert('Tarea Agregada...')
      },
      error: (e: Error) => {
        console.log(e.message);
       
      }
 }
)
}



}

