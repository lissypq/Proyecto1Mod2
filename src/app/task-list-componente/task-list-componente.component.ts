import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tarea } from '../tarea.interface';
import { TaskItemComponentComponent } from '../task-item-component/task-item-component.component';
import { NgForm } from '@angular/forms';
import { TasksService } from '../tasks.service';
import { RouterModule } from '@angular/router';
import { TasklistdetailComponent } from '../tasklistdetail/tasklistdetail.component';
import { inject} from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-task-list-componente',
  imports: [TaskItemComponentComponent, RouterModule],
  standalone: true,
  templateUrl: './task-list-componente.component.html',
  styleUrl: './task-list-componente.component.css'
})

export class TaskListComponenteComponent implements OnInit {
tasklist: Tarea[] = [];

constructor() { }

 ngOnInit(): void {
this.agregarListaTareas();
 }

 taskservices= inject(TasksService)

  receiveT(tarea:Tarea ){
    const tasks = structuredClone(tarea);
       this.tasklist.push(tasks);
      }

      

  agregarListaTareas():void {
  this.taskservices.gettask().subscribe(
    {
      next: (tareas: Tarea[]) => {
        this.tasklist = tareas      
      },
      error: (e: Error) => {
        console.log(e.message);
        alert('Error al cargar la lista de tareas');
      }
   }
  )
  }
  
  onDeleteT(id: number){
      this.taskservices.deletetaskbyid(id).subscribe(
    {
      next: () => {
        console.log('Tarea eliminada');    
        alert('tarea eliminada');    
      },
      error: (e: Error) => {
          alert('Error ');
      }
   })
      
  }
  
  



}
