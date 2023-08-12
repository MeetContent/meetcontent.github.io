import React from 'react';
import DivisionPage from '../components/DivisionPage/DivisionPage';
import Link from '@docusaurus/Link';

export default function Wroclaw() {
  return (
    <DivisionPage
      name="Wrocław"
      description='Wrocław is known as the "city of meetings"'
      about={<>A few words from Tomek will be here</>}
      blogLink="blog/tags/wroclaw"
      meetupsLink="events/wroclaw"
      newsletterLink=""
      slackLink=""
    />
  );
}
