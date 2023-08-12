import React from 'react';
import RegisterButton from './RegisterButton';
import styles from './MetadataDisplay.module.css';
import { useEventMetadata } from '@site/src/theme/DocItem';

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

export default function MetadataDisplay() {
  const eventMetadata = useEventMetadata();

  if (!eventMetadata) {
    return null;
  }

  const { division, meetup_number, speakers, location, date } = eventMetadata;

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        MeetContent {division} #{meetup_number}
      </div>
      <div>by {speakers?.join(', ')}</div>
      <div className={styles.timeAndPlace}>
        <div>{location}</div>
        <time dateTime={date}>
          {new Date(date).toLocaleString('en-US', dateOptions)}
        </time>
      </div>
      <RegisterButton />
    </div>
  );
}
