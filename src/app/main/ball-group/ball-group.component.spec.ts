import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BallGroupComponent } from './ball-group.component';

describe('BallGroupComponent', () => {
  let component: BallGroupComponent;
  let fixture: ComponentFixture<BallGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BallGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BallGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
