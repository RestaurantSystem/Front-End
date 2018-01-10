import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenagerComponent } from './menager.component';

describe('MenagerComponent', () => {
  let component: MenagerComponent;
  let fixture: ComponentFixture<MenagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
