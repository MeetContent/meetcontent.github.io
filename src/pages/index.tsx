import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import GetTheBallRolling from '../components/GetTheBallRolling/GetTheBallRolling';
import TheStageCanBeYours from '../components/TheStageCanBeYours/TheStageCanBeYours';
import LoveToTalk from '../components/LoveToTalk/LoveToTalk';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx('hero__title', styles.title)}>
          {siteConfig.title}
        </h1>
        <p className={clsx('hero__subtitle', styles.subTitle)}>
          Meetup for technical content professionals
        </p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <GetTheBallRolling />
        <TheStageCanBeYours />
        <LoveToTalk />
      </main>
    </Layout>
  );
}
