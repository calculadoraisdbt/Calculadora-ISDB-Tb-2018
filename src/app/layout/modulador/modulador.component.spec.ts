import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuladorComponent } from './modulador.component';

describe('RemuxComponent', () => {
  let component: ModuladorComponent;
  let fixture: ComponentFixture<ModuladorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuladorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuladorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
