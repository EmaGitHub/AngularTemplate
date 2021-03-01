import { Environment } from 'src/app/shared/domain/utils/environment.model';

// const apiBaseUrl = 'https://svilincommerce.ecredit.it/apiectx';
const apiBaseUrl = '';


export const environment: Environment = {
  production: true,
  debuglevel: 'error',
  apiVdrUrl: `${apiBaseUrl}/ectx-vdr-file-srv`,
  apiFileRegistryUrl: `${apiBaseUrl}/ectx-file-registry-srv`,
  apiAccountingUrl: `${apiBaseUrl}/ectx-accounting-srv`,
  apiDocUrl: `${apiBaseUrl}/ectx-doc-registry-srv`,
  apiBiUrl: `${apiBaseUrl}/ectx-bi-reporting-srv`
};
