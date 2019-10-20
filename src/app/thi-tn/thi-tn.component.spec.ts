import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThiTNComponent } from './thi-tn.component';

describe('ThiTNComponent', () => {
  let component: ThiTNComponent;
  let fixture: ComponentFixture<ThiTNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThiTNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThiTNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
