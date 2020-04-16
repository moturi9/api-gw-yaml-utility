export class FormData {
  proxyType = '';
  apiType = '';
  apiName = '';
  appTeamEmail = [];
  authorization = '';
  Quota = {
    quotaName: '',
    count: '',
    interval: '',
    timeUnit: '',
    startTime: ''
  };
  SpikeArrest = {
    spikeArrestName: '',
    rate: ''
  };
  virtualBasePath = '';
  resourcePath = '';
  swaggerUrl = '';
  productName = '';
  productDescription = '';
  snbx = {
    backendHost: '',
    getRoles: '',
    putRoles: '',
    postRoles: '',
    deleteRoles: '',
    patchRoles: ''
  };
  throttling = '';

  clear() {
    this.proxyType = '';
    this.apiType = '';
    this.apiName = '';
    this.appTeamEmail = [];
    this.authorization = '';
    this.Quota = {
      quotaName: '',
      count: '',
      interval: '',
      timeUnit: '',
      startTime: ''
    };
    this.SpikeArrest = {
      spikeArrestName: '',
      rate: ''
    };
    this.virtualBasePath = '';
    this.resourcePath = '';
    this.swaggerUrl = '';
    this.productName = '';
    this.productDescription = '';
    this.snbx = {
      backendHost: '',
      getRoles: '',
      putRoles: '',
      postRoles: '',
      deleteRoles: '',
      patchRoles: ''
    };
    this.throttling = '';
  }
}

export class StepOne {
  proxyType = '';
  apiType = '';
  apiName = '';
  appTeamEmail = [];
  authorization = '';
  Quota = {
    quotaName: '',
    count: '',
    interval: '',
    timeUnit: '',
    startTime: ''
  };
  SpikeArrest = {
    spikeArrestName: '',
    rate: ''
  };
}

export class StepTwo {
  virtualBasePath = '';
  resourcePath = '';
  swaggerUrl = '';
  productName = '';
  productDescription = '';
  snbx = {
    backendHost: '',
    getRoles: '',
    putRoles: '',
    postRoles: '',
    deleteRoles: '',
    patchRoles: ''
  };
  throttling = '';
}
