import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeupdatetaskComponent } from './homeupdatetask.component';

describe('HomeupdatetaskComponent', () => {
  let component: HomeupdatetaskComponent;
  let fixture: ComponentFixture<HomeupdatetaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeupdatetaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeupdatetaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
