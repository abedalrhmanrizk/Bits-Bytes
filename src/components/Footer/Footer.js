import React from 'react';
import Link from 'next/link';

import Logo from '@/components/Logo';

import DecorativeSwoops from './DecorativeSwoops';
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.wrapper}>
      <DecorativeSwoops />
      <div className={styles.content}>
        <div>
          <Logo mobileAlignment="center" />
          <p className={styles.attribution}>
            Blog template created by Josh W. Comeau
          </p>
        </div>
        <nav>
          <h2 className={styles.linkHeading}>Links</h2>
          <ul className={styles.linkList}>
            <li>
              <Link href="/rss">RSS feed</Link>
            </li>
            <li>
              <Link href="/terms">Terms of Use</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <a href="https://twitter.com/abedalrhmanrizk">
                Twitter
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
