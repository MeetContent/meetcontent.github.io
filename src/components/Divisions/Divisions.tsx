import Link from '@docusaurus/Link';
import React from 'react';
import styles from './Divisions.module.css';
import clsx from 'clsx';

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
            className={clsx(styles.card, 'button', 'button--primary')}
            key={name}
          >
            <h2>
              <div>{name}</div>
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
