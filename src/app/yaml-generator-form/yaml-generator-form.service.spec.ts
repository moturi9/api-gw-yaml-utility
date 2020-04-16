import { TestBed } from '@angular/core/testing';

import { YamlGeneratorFormService } from './yaml-generator-form.service';

describe('YamlGeneratorFormService', () => {
  let service: YamlGeneratorFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YamlGeneratorFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
