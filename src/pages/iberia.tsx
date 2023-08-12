import React from 'react';
import DivisionPage from '../components/DivisionPage/DivisionPage';

export default function Iberia() {
  return (
    <DivisionPage
      name="Iberia"
      description="Meetups in Spain and Portugal!"
      about={<>A few words from Daniel will be here...</>}
      blogLink="blog/tags/iberia"
      meetupsLink="events/iberia"
      newsletterLink=""
      slackLink=""
    />
  );
}
