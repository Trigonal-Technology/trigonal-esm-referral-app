
const moduleName = '@trigonal/esm-referral-app';

const options = {
  featureName: 'patient-referral',
  moduleName,
};

export const importTranslation = require.context('../translations', false, /.json$/, 'lazy');
