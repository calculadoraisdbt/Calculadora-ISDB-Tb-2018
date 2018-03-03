import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SfnComponent } from './sfn.component';

describe('SfnComponent', () => {
  let component: SfnComponent;
  let fixture: ComponentFixture<SfnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SfnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SfnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
