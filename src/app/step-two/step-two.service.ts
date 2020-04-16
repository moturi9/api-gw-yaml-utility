import { StepTwoValidatorService } from './step-two-validator.service';
import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { YamlGeneratorFormValidatorsService } from '../yaml-generator-form/yaml-generator-form-validators.service';

@Injectable({
  providedIn: 'root'
})
export class StepTwoService {
  public form: FormGroup;

  constructor(private fb: FormBuilder, private stepTwoValidatorService: StepTwoValidatorService) {
    this.form = this.fb.group(
      {
        virtualBasePath: [null],
        resourcePath: [null],
        appCode: [null],
        swaggerUrl: [null],
        productName: [null],
        productDescription: [null],
        snbx: this.fb.group({
          backendHost: [null],
          getRoles: [null],
          putRoles: [null],
          postRoles: [null],
          deleteRoles: [null],
          patchRoles: [null]
        }),
        throttling: [null]
      },
      {
        validator: this.stepTwoValidatorService.formValidator()
      }
    );
  }

  get isValid(): boolean {
    if (!this.form.valid) {
      this.stepTwoValidatorService.validateAllFormFields(this.form);
      return false;
    }

    return true;
  }
}
