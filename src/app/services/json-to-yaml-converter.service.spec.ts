import { TestBed } from '@angular/core/testing';

import { JsonToYamlConverterService } from './json-to-yaml-converter.service';

describe('JsonToYamlConverterService', () => {
  let service: JsonToYamlConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonToYamlConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
