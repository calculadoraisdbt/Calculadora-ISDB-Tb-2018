import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodificadorComponent } from './codificador.component';

describe('CodificadorComponent', () => {
  let component: CodificadorComponent;
  let fixture: ComponentFixture<CodificadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodificadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodificadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
