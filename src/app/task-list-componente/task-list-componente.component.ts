import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tarea } from '../tarea.interface';
import { TaskItemComponentComponent } from '../task-item-component/task-item-component.component';
import { NgForm } from '@angular/forms';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-task-list-componente',
  imports: [TaskItemComponentComponent],
  templateUrl: './task-list-componente.component.html',
  styleUrl: './task-list-componente.component.css'
})
export class TaskListComponenteComponent implements OnInit {
tasklist: Tarea[] = [ ]
constructor( private taskservices:TasksService) { }

 ngOnInit(): void {
   this.tasklist = this.taskservices.getTasks();
 }
  
  agregarListaTareas(tarea: Tarea):void {
    this.taskservices.addTask(tarea)
  }

  addTask(tarea: Tarea):void{
    this.taskservices.addTask(tarea)
   }

   marktask(tarea: Tarea):void{
    this.taskservices.completeTask(tarea.id ? tarea.id : 0);
   }

  onDeleteT(id: number): void {
        this.taskservices.deleteTask(id)
      
              }

  onCheck(index: number) {
    console.log(this.tasklist);
    this.tasklist[index].estado = !this.tasklist[index].estado;
  }
}
