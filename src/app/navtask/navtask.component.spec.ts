import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavtaskComponent } from './navtask.component';

describe('NavtaskComponent', () => {
  let component: NavtaskComponent;
  let fixture: ComponentFixture<NavtaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavtaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
