import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tarea } from '../tarea.interface';
import { TaskItemComponentComponent } from '../task-item-component/task-item-component.component';
import { NgForm } from '@angular/forms';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-task-list-componente',
  imports: [TaskItemComponentComponent, FormsModule],
  standalone: true,
  templateUrl: './task-list-componente.component.html',
  styleUrl: './task-list-componente.component.css'
})

export class TaskListComponenteComponent implements OnInit {
tasklist: Tarea[] = []

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

 
  onDeleteT(id: number): void {
        this.taskservices.deleteTask(id)
      
              }


}
