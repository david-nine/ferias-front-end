import { TestBed } from '@angular/core/testing';

import { RequerimentoService } from './requerimento.service';

describe('RequerimentoService', () => {
  let service: RequerimentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequerimentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
