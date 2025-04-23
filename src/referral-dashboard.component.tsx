import React from 'react';
import { useTranslation } from 'react-i18next';
import { EmptyState } from '@openmrs/esm-patient-common-lib';

function ReferralDashboardComponent() {
    const { t } = useTranslation();
    const displayText = t('referrals', 'Referrals');
    const headerTitle = t('referrals', 'Referrals');

    return <EmptyState displayText={displayText} headerTitle={headerTitle} />
}

export default ReferralDashboardComponent;