import Link from '@docusaurus/Link';
import clsx from 'clsx';
import React from 'react';
import styles from './LoveToTalk.module.css';

export default function LoveToTalk() {
  return (
    <div
      className={clsx(
        styles.wrapper,
        'container',
        'padding-top--lg',
        'padding-bottom--lg',
      )}
    >
      <section>
        <h2>We’d love to see you in one of our meetups!</h2>
        <p>You can find us on Facebook, Slack, LinkedIn, and GitHub too</p>
      </section>
      <Link
        href="mailto:contact@meetcontent.org"
        className={styles.email}
      >
        contact@meetcontent.org
      </Link>
    </div>
  );
}
