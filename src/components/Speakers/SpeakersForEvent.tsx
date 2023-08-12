import { useEventMetadata } from '@site/src/theme/DocItem';
import React from 'react';
import Speaker from './Speaker';
import { allSpeakers } from './allSpeakers';
import styles from './SpeakersForEvent.module.css';

export default function SpeakersForEvent() {
  const eventMetadata = useEventMetadata();

  if (!eventMetadata) {
    return null;
  }

  const matchingSpeakers = eventMetadata.speakers
    .map((speaker) => allSpeakers.find((s) => s.name === speaker))
    .filter(Boolean);
  return (
    <div className={styles.wrapper}>
      {matchingSpeakers.map((matchingSpeaker) => (
        <Speaker
          key={matchingSpeaker.name}
          {...matchingSpeaker}
        />
      ))}
    </div>
  );
}
