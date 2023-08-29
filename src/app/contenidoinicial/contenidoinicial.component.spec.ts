import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoinicialComponent } from './contenidoinicial.component';

describe('ContenidoinicialComponent', () => {
  let component: ContenidoinicialComponent;
  let fixture: ComponentFixture<ContenidoinicialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenidoinicialComponent]
    });
    fixture = TestBed.createComponent(ContenidoinicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
