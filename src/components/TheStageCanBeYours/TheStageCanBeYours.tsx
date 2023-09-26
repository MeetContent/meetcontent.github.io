import React from 'react';
import styles from './TheStageCanBeYours.module.css';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import ConferenceSpeaker from './undraw_conference.svg';

const imageSize = 300;

export default function TheStageCanBeYours() {
  return (
    <div
      className={clsx(styles.wrapper, 'padding-top--lg', 'padding-bottom--lg')}
    >
      <div className={clsx('container', styles.callForSpeakers)}>
        <section>
          <ConferenceSpeaker
          width={imageSize}
          height={imageSize}
          />
        </section>
        <section>
          <p>
            If you’d like to share your knowledge and experiences with the
            content community, become a speaker at MeetContent events. During
            the meetups, we mainly focus on:
          </p>
          <ul>
            <li>UI and UX</li>
            <li>e-learning and training</li>
            <li>graphic design (videos, photos, graphics, animations)</li>
            <li>technical content (manuals, tutorials, knowledge bases)</li>
          </ul>
          <p>We’re also open to propositions of talks from other areas.</p>
          <Link
            href="https://goo.gl/forms/k0ksPd9J6RcE0JhE3"
            className="button button--secondary button--lg"
          >
            Contact us
          </Link>
        </section>
      </div>
    </div>
  );
}
