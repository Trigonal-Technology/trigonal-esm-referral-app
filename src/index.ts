import { getSyncLifecycle } from '@openmrs/esm-framework';
import { createDashboardLink } from '@openmrs/esm-patient-common-lib';
import { dashboardMeta } from './dashboard.meta';
import referralDashboardComponent from './referral-dashboard.component';

const moduleName = '@trigonal/esm-referral-app';

const options = {
  featureName: 'patient-referral',
  moduleName,
};

export const importTranslation = require.context('../translations', false, /.json$/, 'lazy');

export const referralDashboardContent = getSyncLifecycle(referralDashboardComponent, options);

export const referralDashboardLink =
  getSyncLifecycle(
    createDashboardLink({
      ...dashboardMeta,
      moduleName,
    }),
    options,
  );