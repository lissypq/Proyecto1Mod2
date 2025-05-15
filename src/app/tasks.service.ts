import { Injectable } from '@angular/core';
import { Tarea } from './tarea.interface';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
 task: Tarea[] = []

      constructor() { 
      this.getTasks();
      }


      getTasks(): Tarea[] {
        this.getfromLocalStorage()
        return this.task
      }

      addTask(tarea: Tarea): void {
        this.task.push(tarea)
        this.setlocalStorage()
      }

      deleteTask(id:number): void {
        this.task = this.task.filter(tarea => tarea.id !== id);         
        this.setlocalStorage()
      }
      
      
      getfromLocalStorage(): void {
      if (typeof localStorage!== 'undefined') {
        const savetask = localStorage.getItem('task');
        if (savetask) {
          this.task = JSON.parse(savetask);
        }
      }
        }
      setlocalStorage(): void {
        if (typeof localStorage !== 'undefined') {
        localStorage.setItem('task', JSON.stringify(this.task));
      }  
      }  

}
