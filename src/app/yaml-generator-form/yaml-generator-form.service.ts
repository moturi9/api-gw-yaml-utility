import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { YamlGeneratorFormValidatorsService } from './yaml-generator-form-validators.service';

@Injectable({
  providedIn: 'root',
})
export class YamlGeneratorFormService {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private yamlGeneratorFormValidatorsService: YamlGeneratorFormValidatorsService
  ) {
    this.form = this.fb.group(
      {
        proxyType: [null],
        apiType: [null],
        apiName: [null],
        appTeamEmail: [null],
        authorization: [null],
        Quota: this.fb.group({
          quotaName: [null],
          count: [null],
          interval: [null],
          timeUnit: [null],
          startTime: [null],
        }),
        SpikeArrest: this.fb.group({
          spikeArrestName: [null],
          rate: [null],
        }),
      },
      {
        validator: this.yamlGeneratorFormValidatorsService.formValidator(),
      }
    );
  }

  get isValid(): boolean {
    if (!this.form.valid) {
      this.yamlGeneratorFormValidatorsService.validateAllFormFields(this.form);
      return false;
    }

    return true;
  }
}
