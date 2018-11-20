import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TworldComponent } from './tworld.component';

describe('TworldComponent', () => {
  let component: TworldComponent;
  let fixture: ComponentFixture<TworldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TworldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TworldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
