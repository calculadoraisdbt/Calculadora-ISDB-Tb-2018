import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemultiplexorComponent } from './remultiplexor.component';

describe('ResumenComponent', () => {
  let component: RemultiplexorComponent;
  let fixture: ComponentFixture<RemultiplexorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemultiplexorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemultiplexorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
