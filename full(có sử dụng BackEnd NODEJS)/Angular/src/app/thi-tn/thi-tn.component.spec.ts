import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThiTnComponent } from './thi-tn.component';

describe('ThiTnComponent', () => {
  let component: ThiTnComponent;
  let fixture: ComponentFixture<ThiTnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThiTnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThiTnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
