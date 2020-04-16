import { Injectable } from '@angular/core';
import { FormData, StepOne, StepTwo } from './formData.model';

@Injectable()
export class FormDataService {
  private formData: FormData = new FormData();
  public userDeploymentDate;

  constructor() {}

  getStepOneForm(): StepOne {
    const stepOneFormData: StepOne = {
      proxyType: this.formData.proxyType,
      apiType: this.formData.apiType,
      apiName: this.formData.apiName,
      appTeamEmail: this.formData.appTeamEmail,
      authorization: this.formData.authorization,
      Quota: {
        quotaName: this.formData.Quota.quotaName,
        count: this.formData.Quota.count,
        interval: this.formData.Quota.interval,
        timeUnit: this.formData.Quota.timeUnit,
        startTime: this.formData.Quota.startTime
      },
      SpikeArrest: {
        spikeArrestName: this.formData.SpikeArrest.spikeArrestName,
        rate: this.formData.SpikeArrest.rate
      }
    };
    return stepOneFormData;
  }

  setStepOneForm(data: StepOne) {
    this.formData.proxyType = data.proxyType;
    this.formData.apiType = data.apiType;
    this.formData.apiName = data.apiName;
    this.formData.appTeamEmail = data.appTeamEmail;
    this.formData.authorization = data.authorization;
    this.formData.Quota.quotaName = data.Quota.quotaName;
    this.formData.Quota.count = data.Quota.count;
    this.formData.Quota.interval = data.Quota.interval;
    this.formData.Quota.timeUnit = data.Quota.timeUnit;
    this.formData.Quota.startTime = data.Quota.startTime;
    this.formData.SpikeArrest.spikeArrestName = data.SpikeArrest.spikeArrestName;
    this.formData.SpikeArrest.rate = data.SpikeArrest.rate;
  }

  getStepTwoForm(): StepTwo {
    const stepTwoFormData: StepTwo = {
      virtualBasePath: this.formData.virtualBasePath,
      resourcePath: this.formData.resourcePath,
      swaggerUrl: this.formData.swaggerUrl,
      productName: this.formData.productName,
      productDescription: this.formData.productDescription,
      snbx: {
        backendHost: this.formData.snbx.backendHost,
        getRoles: this.formData.snbx.getRoles,
        putRoles: this.formData.snbx.putRoles,
        postRoles: this.formData.snbx.postRoles,
        deleteRoles: this.formData.snbx.deleteRoles,
        patchRoles: this.formData.snbx.patchRoles
      },
      throttling: this.formData.throttling
    };
    return stepTwoFormData;
  }

  setStepTwoForm(data: StepTwo) {
    this.formData.virtualBasePath = data.virtualBasePath;
    this.formData.resourcePath = data.resourcePath;
    this.formData.swaggerUrl = data.swaggerUrl;
    this.formData.productName = data.productName;
    this.formData.productDescription = data.productDescription;
    this.formData.snbx.backendHost = data.snbx.backendHost;
    this.formData.snbx.getRoles = data.snbx.getRoles;
    this.formData.snbx.putRoles = data.snbx.putRoles;

    this.formData.snbx.postRoles = data.snbx.postRoles;
    this.formData.snbx.deleteRoles = data.snbx.deleteRoles;
    this.formData.snbx.patchRoles = data.snbx.patchRoles;
    this.formData.throttling = data.throttling;
  }

  getFormDataNoPolicies() {
    const formDataNoPolicies = {
      proxyType: this.formData.proxyType,
      apiType: this.formData.apiType,
      apiName: this.formData.apiName,
      appTeamEmail: this.formData.appTeamEmail,
      authorization: this.formData.authorization,
      virtualBasePath: this.formData.virtualBasePath,
      resourcePath: this.formData.resourcePath,
      swaggerUrl: this.formData.swaggerUrl,
      productName: this.formData.productName,
      productDescription: this.formData.productDescription,
      snbx: {
        backendHost: this.formData.snbx.backendHost,
        getRoles: this.formData.snbx.getRoles,
        putRoles: this.formData.snbx.putRoles,
        postRoles: this.formData.snbx.postRoles,
        deleteRoles: this.formData.snbx.deleteRoles,
        patchRoles: this.formData.snbx.patchRoles
      },
      throttling: this.formData.throttling
    };
    return formDataNoPolicies;
  }

  getQuotaPolicyData() {
    const quotaData = {
      Quota: {
        Name: this.formData.Quota.quotaName,
        count: this.formData.Quota.count,
        interval: this.formData.Quota.interval,
        timeUnit: this.formData.Quota.timeUnit,
        startTime: this.formData.Quota.startTime
      }
    };
    return quotaData;
  }

  getSpikeArrestData() {
    const spikeArrestData = {
      SpikeArrest: {
        Name: this.formData.SpikeArrest.spikeArrestName,
        rate: this.formData.SpikeArrest.rate
      }
    };
    return spikeArrestData;
  }

  getFormData() {
    let returnFormData = null;

    const formDataNoPolicies = this.getFormDataNoPolicies();
    const Quota = this.getQuotaPolicyData()['Quota'];
    const SpikeArrest = this.getSpikeArrestData()['SpikeArrest'];
    if (this.formData.Quota.quotaName && this.formData.SpikeArrest.spikeArrestName) {
      returnFormData = { ...formDataNoPolicies, Quota, SpikeArrest };
    } else if (this.formData.Quota.quotaName && !this.formData.SpikeArrest.spikeArrestName) {
      returnFormData = { ...formDataNoPolicies, Quota };
    } else if (!this.formData.Quota.quotaName && this.formData.SpikeArrest.spikeArrestName) {
      returnFormData = { ...formDataNoPolicies, SpikeArrest };
    } else {
      returnFormData = { ...formDataNoPolicies };
    }
    return returnFormData;
  }

  reset() {
    this.formData.clear();
  }
}
