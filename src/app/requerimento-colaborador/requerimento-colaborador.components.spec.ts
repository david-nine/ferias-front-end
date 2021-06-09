import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequerimentoColaboradorComponent } from './requerimento-colaborador.component';

describe('RequerimentoColaboradorComponent', () => {
  let component: RequerimentoColaboradorComponent;
  let fixture: ComponentFixture<RequerimentoColaboradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequerimentoColaboradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequerimentoColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
