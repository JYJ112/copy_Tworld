import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChocoaComponent } from './chocoa.component';

describe('ChocoaComponent', () => {
  let component: ChocoaComponent;
  let fixture: ComponentFixture<ChocoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChocoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChocoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
