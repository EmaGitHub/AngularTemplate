import { Environment } from 'src/app/shared/domain/utils/environment.model';

// const apiBaseUrl = 'https://prodincommerce.ecredit.it/apiectx';
const apiBaseUrl = '';

export const environment: Environment = {
  production: true,
  debuglevel: 'error',
  apiMirrorUser: `${apiBaseUrl}/mirror/user`
};
