import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuInteractivoComponent } from './menu-interactivo.component';

describe('MenuInteractivoComponent', () => {
  let component: MenuInteractivoComponent;
  let fixture: ComponentFixture<MenuInteractivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuInteractivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuInteractivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
