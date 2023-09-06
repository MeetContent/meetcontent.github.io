import React from 'react';
import DivisionPage from '../components/DivisionPage/DivisionPage';
import DivisionPageIberia from '../components/DivisionPage/DivisionPage';

export default function Iberia() {
  return (
    <DivisionPageIberia
      name="Iberia"
      description="Meetups en España y Portugal"
      about={<>
      Aquí viene nuestro texto. 1, 2, 3, probando...
      </>}
      blogLink="blog/tags/iberia"
      meetupsLink="events/iberia"
      newsletterLink=""
    />
  );
}
