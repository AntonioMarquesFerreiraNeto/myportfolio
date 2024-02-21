import { TestBed } from '@angular/core/testing';

import { ContatemeService } from './contateme.service';

describe('ContatemeService', () => {
  let service: ContatemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContatemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
