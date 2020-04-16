import { TestBed } from '@angular/core/testing';

import { StepTwoValidatorService } from './step-two-validator.service';

describe('StepTwoValidatorService', () => {
  let service: StepTwoValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StepTwoValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
