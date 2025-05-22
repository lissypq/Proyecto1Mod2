import { Component, inject, OnInit } from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TasksService } from '../tasks.service';
import { NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { error } from 'node:console';
import { Tarea } from '../tarea.interface';
import { RouterModule } from '@angular/router';
import { TaskListComponenteComponent } from '../task-list-componente/task-list-componente.component';
import { TaskItemComponentComponent } from '../task-item-component/task-item-component.component';

@Component({
  selector: 'app-tasklistdetail',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule, FormsModule],
  templateUrl: './tasklistdetail.component.html',
  styleUrl: './tasklistdetail.component.css'
})
export class TasklistdetailComponent implements OnInit {

       ngOnInit(): void {
         this.activatedRoute.paramMap.subscribe(
          { 
            next: (param) => {
             this.id = Number(param.get('id'))
             this.gettaskbyid(this.id)
             },
            error: (e:Error) => {
              console.log(e.message);
            }
          }
          ) 
        }
          
        id: number = 0;

      activatedRoute = inject(ActivatedRoute);

       fb = inject(FormBuilder);
       ts= inject(TasksService);

     formulario = this.fb.nonNullable.group(
      {
       id: [0, [Validators.required]],
       nombre: ['',[ Validators.required]]
          
      }
      )

   gettaskbyid(id: number) {
    this.ts.gettaskbyid(id).subscribe(
      {
        next: (tarea: Tarea) => {
          this.formulario.controls['id'].setValue(tarea.id)
          this.formulario.controls['nombre'].setValue(tarea.nombre)
        },
        error: (e: Error) => {
          console.log('Error al obtener la tarea');
        }
      }
    )
  
  
  }
     updatetask() {

       if (this.formulario.invalid)return; 
        const tarea = this.formulario.getRawValue()
        const t= { id:this.formulario.controls['id'].value,
        }
        this.ts.puttask(tarea, this.id).subscribe(
          {
            next: (tarea: Tarea) => {
               console.log('Tarea actualizada');

            },
            error: (e: Error) => {
              console.log('Error al actualizar la tarea');
            }
          }
        )
    }
 }


  




