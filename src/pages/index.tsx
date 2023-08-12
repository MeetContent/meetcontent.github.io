import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import TheStageCanBeYours from '../components/TheStageCanBeYours/TheStageCanBeYours';
import LoveToTalk from '../components/LoveToTalk/LoveToTalk';
import Divisions from '../components/Divisions/Divisions';

const description = 'Meetups for technical content professionals';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className={clsx('hero__subtitle', styles.subTitle)}>{description}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={description}
    >
      <HomepageHeader />
      <main>
        <Divisions />
        <TheStageCanBeYours />
        <LoveToTalk />
      </main>
    </Layout>
  );
}
