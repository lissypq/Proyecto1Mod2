import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasklistdetailComponent } from './tasklistdetail.component';

describe('TasklistdetailComponent', () => {
  let component: TasklistdetailComponent;
  let fixture: ComponentFixture<TasklistdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasklistdetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasklistdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
