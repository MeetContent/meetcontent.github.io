import React from 'react';
import DivisionPageWRO from '../components/DivisionPage/DivisionPageWRO';

export default function Wroclaw() {
  return (
    <DivisionPageWRO
      name="Wrocław"
      description='Wrocław is known as the "city of meetings". Let&#39;s meet then!'
      about={
        <>
        The yearly soap! conference was always a great place to meet like-minded tech content
        professionals, but once a year was not enough for us! We started
        MeetContent in Wocław to keep the local community spirit alive.
        </>}
      blogLink="blog/tags/wroclaw"
      meetupsLink="events/wroclaw"
      newsletterLink=""
      facebookLink
    />
  );
}
