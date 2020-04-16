import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { YamlGeneratorFormService } from './yaml-generator-form.service';
import { JsonToYamlConverterService } from '../services/json-to-yaml-converter.service';
import { Router } from '@angular/router';
import { FormDataService } from '../data/formData.service';

@Component({
  selector: 'app-yaml-generator-form',
  templateUrl: './yaml-generator-form.component.html',
  styleUrls: ['./yaml-generator-form.component.scss'],
})
export class YamlGeneratorFormComponent implements OnInit {
  public title = 'API Gateway YAML Utility';
  public description1 = [
    {
      name:
        'Provide the general information about your API and generate YAML to feed your APIGEE gateway pipeline',
    },
  ];
  public isProxySelected = false;
  public yaml: any;
  colorControl = new FormControl('primary');

  public proxyTypes = [
    { label: 'API', value: 'API' },
    { label: 'UI Services', value: 'UI_SERVICES' },
    { label: 'UI Content', value: 'UI_CONTENT' },
  ];
  public apiTypes = [
    { label: 'Private', value: 'PRIVATE' },
    { label: 'Protected', value: 'PROTECTED' },
    { label: 'Public', value: 'PUBLIC' },
  ];
  public authorizations = [
    { label: 'Ping', value: 'PING' },
    { label: 'None', value: 'None' },
  ];
  public selectedPolicies: string;
  public value: any;

  public alert: any = [];

  get form(): FormGroup {
    return this.yamlGeneratorFormService.form;
  }

  getErrorMessage() {
    if (
      this.yamlGeneratorFormService.form
        .get('appTeamEmail')
        .hasError('required')
    ) {
      return 'You must enter a value';
    }

    return this.yamlGeneratorFormService.form
      .get('appTeamEmail')
      .hasError('email')
      ? 'Not a valid email'
      : '';
  }

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private yamlGeneratorFormService: YamlGeneratorFormService,
    private formDataService: FormDataService
  ) {}

  public apiTypeChange($event) {}

  public authorizationTypeChange($event) {}

  public proxyTypeChange(e) {
    this.isProxySelected = e.value !== null ? true : false;
  }

  onTabClose(event) {
    this.alert = [];
    this.alert.push({ type: 'info', message: 'Closed tab: ' + event.index });
  }

  onTabOpen(event) {
    this.alert = [];
    this.alert.push({ type: 'info', message: 'Expanded tab: ' + event.index });
  }

  ngOnInit(): void {
    this.populateTypes();
  }

  generateYaml(e) {
    console.log(e.value);
    this.yaml = JsonToYamlConverterService.json2yaml(e.value);
  }

  clear(e) {
    this.form.reset();
    this.yaml = null;
  }

  goToNext(form) {
    this.formDataService.setStepOneForm(form.value);
    this.router.navigate(['/detail']);
  }

  policyTypeChange(e) {
    this.selectedPolicies = '';
    const policyValue = this.yamlGeneratorFormService.form.get('policyType')
      .value;
    // this.selectedPolicies = policyValue.includes('Quota') ? 'Quota' : 'SpikeArrest';
    if (policyValue.includes('Quota') && policyValue.includes('SpikeArrest')) {
      this.selectedPolicies = 'All';
    } else if (policyValue.includes('Quota')) {
      this.selectedPolicies = 'Quota';
    } else if (policyValue.includes('SpikeArrest')) {
      this.selectedPolicies = 'SpikeArrest';
    }

    console.log(this.selectedPolicies);
  }

  populateTypes() {}
}
