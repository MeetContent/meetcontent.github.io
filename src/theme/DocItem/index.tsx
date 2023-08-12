import React from 'react';
import OriginalDocItem from '@theme-original/DocItem';

const dateOptions: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
  hourCycle: 'h24',
  timeZone: 'Europe/Warsaw',
};

export default function DocItem(props) {
  const { date, division, location, meetup_number, speakers } =
    props.content.frontMatter;
  return (
    <>
      <div>
        <h2>
          MeetContent {division} #{meetup_number}
        </h2>
        <div>by {speakers?.join(', ')}</div>
        <div>{location}</div>
        <time dateTime={date}>
          {new Date(date).toLocaleString('en-US', dateOptions)}
        </time>
      </div>
      <OriginalDocItem {...props} />
    </>
  );
}
