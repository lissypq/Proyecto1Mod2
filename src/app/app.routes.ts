import { Routes } from '@angular/router';
import { HomepageTaskComponent } from './homepage-task/homepage-task.component';
import { TaskpageComponent } from './taskpage/taskpage.component';
import { TasklistdetailComponent } from './tasklistdetail/tasklistdetail.component';
import { HomeupdatetaskComponent } from './homeupdatetask/homeupdatetask.component';

export const routes: Routes = [
{
    path: '',
    component:HomepageTaskComponent
},
{
    path: 'Tareas/:id',
    component:HomeupdatetaskComponent
},
{
    path: 'Tareas',
    component:TaskpageComponent
},
{
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
},

];
