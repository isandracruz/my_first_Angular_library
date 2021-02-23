import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyClockComponent } from './my-clock.component';

describe('MyClockComponent', () => {
  let component: MyClockComponent;
  let fixture: ComponentFixture<MyClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyClockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
