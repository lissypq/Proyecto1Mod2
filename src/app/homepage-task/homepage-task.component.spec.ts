import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageTaskComponent } from './homepage-task.component';

describe('HomepageTaskComponent', () => {
  let component: HomepageTaskComponent;
  let fixture: ComponentFixture<HomepageTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepageTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
