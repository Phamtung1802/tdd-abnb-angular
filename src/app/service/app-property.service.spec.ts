import { TestBed } from '@angular/core/testing';

import { AppPropertyService } from './app-property.service';

describe('AppPropertyService', () => {
  let service: AppPropertyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppPropertyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
