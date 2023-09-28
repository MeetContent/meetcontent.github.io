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
          <p>
            MeetContent is a network of communities of practice set up to share knowledge and experiences with product-oriented content:
          </p>
          <ul>
            <li>UI and UX</li>
            <li>e-learning and training</li>
            <li>graphic design (videos, photos, graphics, animations)</li>
            <li>technical content (manuals, tutorials, knowledge bases)</li>
          </ul>
          <p>Have something to share? Our stage can be yours.</p>
          <div>
            <Link
              href="https://goo.gl/forms/k0ksPd9J6RcE0JhE3"
              className="button button--secondary button--lg"
            >
              Contact us
            </Link>
            <Link
              href="https://join.slack.com/t/meetcontent/shared_invite/enQtNDUyNDI2ODY2MTEyLTJmMjkxMGYwZjgwOTJhYjNjMzU5MWVjODNkYmZiNThkMDE4MDQzOTA0ODRhZTM2MDRkNmRiMTE3NWM4MmU2NzI"
              className="button button--primary button--lg"
            >
              Join us on Slack
            </Link>
          </div>
        </section>
        <section>
          <ConferenceSpeaker
          width={imageSize}
          height={imageSize}
          />
        </section>
      </div>
    </div>
  );
}
