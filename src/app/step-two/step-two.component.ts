import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { JsonToYamlConverterService } from '../services/json-to-yaml-converter.service';
import { StepTwoService } from './step-two.service';
import { FormDataService } from '../data/formData.service';
import { FileSaverService } from 'ngx-filesaver';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCopy, faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss'],
})
export class StepTwoComponent implements OnInit {
  public title = 'API Gateway YAML Utility';
  public description1 = [
    {
      name:
        'Provide the general information about your API and generate YAML to feed your APIGEE gateway pipeline',
    },
  ];
  public isProxySelected = false;
  public yaml: any;
  copyIcon = faCopy;
  downloadIcon = faDownload;

  get form(): FormGroup {
    return this.stepTwoService.form;
  }

  colorControl = new FormControl('primary');

  constructor(
    private stepTwoService: StepTwoService,
    private formDataService: FormDataService,
    private fileSaverService: FileSaverService
  ) {}

  public apiTypeChange($e) {}

  public authorizationTypeChange($e) {}

  public proxyTypeChange(e) {
    this.isProxySelected = e.value !== null ? true : false;
  }

  ngOnInit(): void {}

  generateYaml(form) {
    this.formDataService.setStepTwoForm(form.value);
    const formDataRequest = this.formDataService.getFormData();
    this.yaml = JsonToYamlConverterService.json2yaml(formDataRequest);
  }

  clear(e) {
    this.form.reset();
    this.formDataService.reset();
    this.yaml = null;
  }

  download(y) {
    console.log(y);
    this.fileSaverService.save(y, 'yaml.txt');
  }
}
