import { Component } from '@angular/core';
import { TaskListComponenteComponent } from '../task-list-componente/task-list-componente.component';

@Component({
  selector: 'app-taskpage',
  imports: [TaskListComponenteComponent],
  templateUrl: './taskpage.component.html',
  styleUrl: './taskpage.component.css'
})
export class TaskpageComponent {

}
