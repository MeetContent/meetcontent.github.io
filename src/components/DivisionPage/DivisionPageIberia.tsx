import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import React from 'react';
import styles from './DivisionPage.module.css';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import MailchimpEmbedIberia from './MailchimpEmbedIberia';

type DivisionPageProps = {
  name: string;
  description: string;
  about: JSX.Element;
  team: JSX.Element;
  newsletterLink: string;
  slackLink?: string;
  meetupsLink: string;
  blogLink: string;
  linkedInIberia?: string;
};

export default function DivisionPageIberia({
  name,
  description,
  about,
  team,
  slackLink,
  meetupsLink,
  blogLink,
  linkedInIberia,
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

        <MailchimpEmbedIberia />

        <div className={styles.links}>
          <Link
            to={meetupsLink}
            className="button button--primary button--iberia"
          >
            Sobre nuestros Meetups
          </Link>
          <Link
            to={blogLink}
            className="button button--primary button--iberia"
          >
            Accede aquí a los artículos
          </Link>
          <Link
            href={linkedInIberia}
            className={clsx('button', 'button--secondary', 'button--iberia', styles.fullWidthLink)}
          >
            Síguenos en Linkedin
          </Link>
          <Link
            href={slackLink || globalSlackLink}
            className={clsx('button', 'button--secondary', 'button--iberia', styles.fullWidthLink)}
          >
            Únete a nosotros en Slack
          </Link>
        </div>

        <div className={styles.about}>{team}</div>
      </div>
    </Layout>
  );
}
