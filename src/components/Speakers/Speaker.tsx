import React from 'react';
import styles from './Speaker.module.css';

export type SpeakerProps = {
  name: string;
  bio: JSX.Element;
};

export default function Speaker({ name, bio }: SpeakerProps) {
  return (
    <section>
      <div className={styles.name}>{name}</div>
      <div className={styles.bio}>{bio}</div>
    </section>
  );
}
