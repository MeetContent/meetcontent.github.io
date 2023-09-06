import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import React from 'react';
import styles from './DivisionPage.module.css';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

type DivisionPageProps = {
  name: string;
  description: string;
  about: JSX.Element;
  newsletterLink: string;
  slackLink?: string;
  meetupsLink: string;
  blogLink: string;
};

export default function DivisionPage({
  name,
  description,
  about,
  newsletterLink,
  slackLink,
  meetupsLink,
  blogLink,
}: DivisionPageProps) {
  const { siteConfig } = useDocusaurusContext();
  const globalSlackLink = siteConfig.customFields.slackLink as string;

  return (
    <Layout
      title={name}
      description={description}
    >
      <div className={clsx('container', styles.pageWrapper)}>
        <div className={styles.header}>
          <h1 className={styles.title}>MeetContent {name}</h1>
          <div className={styles.subtitle}>{description}</div>
        </div>
        <div className={styles.about}>{about}</div>
        <div className={styles.links}>
          <Link
            href={newsletterLink}
            className={clsx('button', 'button--primary', styles.fullWidthLink)}
          >
            Join our newsletter
          </Link>
          <Link
            href={slackLink || globalSlackLink}
            className={clsx('button', 'button--primary', styles.fullWidthLink)}
          >
            Join us on Slack
          </Link>
          <Link
            to={meetupsLink}
            className="button button--primary"
          >
            Learn about our meetups
          </Link>
          <Link
            to={blogLink}
            className="button button--primary"
          >
            Read our amazing articles
          </Link>
        </div>
      </div>
    </Layout>
  );
}
