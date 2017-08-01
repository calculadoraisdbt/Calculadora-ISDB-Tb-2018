import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemuxComponent } from './remux.component';

describe('RemuxComponent', () => {
  let component: RemuxComponent;
  let fixture: ComponentFixture<RemuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemuxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
