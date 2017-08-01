import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplexorComponent } from './multiplexor.component';

describe('MultiplexorComponent', () => {
  let component: MultiplexorComponent;
  let fixture: ComponentFixture<MultiplexorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiplexorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplexorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
