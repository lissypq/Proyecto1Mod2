import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListComponenteComponent } from './task-list-componente.component';

describe('TaskListComponenteComponent', () => {
  let component: TaskListComponenteComponent;
  let fixture: ComponentFixture<TaskListComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskListComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskListComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
