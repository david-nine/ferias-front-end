import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoGestorComponent } from './avaliacao-gestor.component';

describe('AvaliacaoGestorComponent', () => {
  let component: AvaliacaoGestorComponent;
  let fixture: ComponentFixture<AvaliacaoGestorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaliacaoGestorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliacaoGestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
