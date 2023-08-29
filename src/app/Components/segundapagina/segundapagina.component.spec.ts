import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundapaginaComponent } from './segundapagina.component';

describe('SegundapaginaComponent', () => {
  let component: SegundapaginaComponent;
  let fixture: ComponentFixture<SegundapaginaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SegundapaginaComponent]
    });
    fixture = TestBed.createComponent(SegundapaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
