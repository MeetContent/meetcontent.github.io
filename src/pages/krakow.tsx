import React from 'react';
import DivisionPage from '../components/DivisionPage/DivisionPage';
import Link from '@docusaurus/Link';

export default function Krakow() {
  return (
    <DivisionPage
      name="Kraków"
      description="The Kraków chapter of MeetContent, where it all began!"
      about={
        <>
          The yearly <Link href="https://soapconf.com">soap! conference</Link>{' '}
          was always a great place to meet like-minded tech content
          professionals, but once a year was not enough for us! We started
          MeetContent in Krakow to keep the community spirit alive.
        </>
      }
      blogLink="blog/tags/krakow"
      meetupsLink="events/krakow"
      newsletterLink=""
      slackLink=""
    />
  );
}
