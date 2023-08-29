import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerPaginaComponent } from './primer-pagina.component';

describe('PrimerPaginaComponent', () => {
  let component: PrimerPaginaComponent;
  let fixture: ComponentFixture<PrimerPaginaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimerPaginaComponent]
    });
    fixture = TestBed.createComponent(PrimerPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
