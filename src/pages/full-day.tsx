import Layout from '@theme/Layout';
import React from 'react';
import FullDay, { eventName } from '@site/src/components/FullDay/FullDay';

export default function FullDayPage() {
  return (
    <Layout title={eventName}>
      <FullDay />
    </Layout>
  );
}
