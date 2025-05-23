import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskpageComponent } from './taskpage.component';

describe('TaskpageComponent', () => {
  let component: TaskpageComponent;
  let fixture: ComponentFixture<TaskpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
