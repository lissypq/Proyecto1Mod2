import { Component } from '@angular/core';
import{ CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TaskpageComponent } from './taskpage/taskpage.component';
import { NavtaskComponent } from "./navtask/navtask.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavtaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title='Proyecto1'
    
}