import clsx from 'clsx';
import React from 'react';
import styles from './GetTheBallRolling.module.css';
import Link from '@docusaurus/Link';

export default function GetTheBallRolling() {
  return (
    <div className="container padding-top--lg padding-bottom--lg">
      <div className={styles.wrapper}>
        <section className={styles.mainCallToAction}>
          <h2>Get the ball rolling in your city!</h2>
          <p>
            You’d like to breathe life into the content community in your city,
            but don’t know how? Set up your own MeetContent event! Get to know
            interesting people, share your expertise, and become a leader in
            your area. To get in touch, simply drop us a line at
            <Link href="mailto:contact@meetcontent.org">
              contact@meetcontent.org
            </Link>
            .
          </p>
        </section>
        <div>
          <section>
            <h2>
              ✉️ Sign up to our{' '}
              <Link href="https://mailchi.mp/9868d14a0c11/mc-signups">
                newsletter
              </Link>
            </h2>
            <p>
              Never miss a meetup! Be the first to find out what is happening in
              each of our communities, sign up to receive our latest updates
              directly in your inbox.
            </p>
          </section>
          <section>
            <h2>
              ? Continue the conversation on{' '}
              <Link href="https://join.slack.com/t/meetcontent/shared_invite/enQtNDUyNDI2ODY2MTEyLTJmMjkxMGYwZjgwOTJhYjNjMzU5MWVjODNkYmZiNThkMDE4MDQzOTA0ODRhZTM2MDRkNmRiMTE3NWM4MmU2NzI">
                Slack
              </Link>
            </h2>
            <p>
              Ask questions and share knowledge with the MeetContent community!{' '}
              <Link href="https://join.slack.com/t/meetcontent/shared_invite/enQtNDUyNDI2ODY2MTEyLTJmMjkxMGYwZjgwOTJhYjNjMzU5MWVjODNkYmZiNThkMDE4MDQzOTA0ODRhZTM2MDRkNmRiMTE3NWM4MmU2NzI">
                Join our channels
              </Link>{' '}
              and be in touch any time, anywhere.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
