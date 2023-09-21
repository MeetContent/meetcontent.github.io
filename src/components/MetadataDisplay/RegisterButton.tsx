import Link from '@docusaurus/Link';
import { useEventMetadata } from '@site/src/theme/DocItem';
import React from 'react';

export default function RegisterButton() {
  const eventMetadata = useEventMetadata();

  if (!eventMetadata || new Date(eventMetadata.date) < new Date()) {
    return null;
  }

  return (
    <Link
      className="button button--contrast button--lg"
      href={eventMetadata.registration_link}
      style={{ marginTop: '2em' }}
    >
      Register {eventMetadata.division}
    </Link>
  );
}
