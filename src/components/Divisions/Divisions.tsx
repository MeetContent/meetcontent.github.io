import Link from '@docusaurus/Link';
import clsx from 'clsx';
import React from 'react';
import styles from './Divisions.module.css';

type DivisionProps = {
  name: string;
  link: string;
};

const divisions: DivisionProps[] = [
  {
    name: 'Kraków',
    link: 'krakow',
  },
  {
    name: 'Wrocław',
    link: 'wroclaw',
  },
  {
    name: 'Iberia',
    link: 'iberia',
  },
];

export default function Divisions() {
  return (
    <div className="container">
      <div className={styles.cards}>
        {divisions.map(({ name, link }) => (
          <Link
            to={link}
            className={styles.card}
            key={name}
          >
            <h2>
              <div>MeetContent</div>
              <div>{name}</div>
            </h2>
            <div>Learn more</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
