import React from 'react';
import classes from './Footer.module.scss';
import { Footer } from './Footer';
import { Demo } from '../../section/Demo';

export const FooterWithDemo: React.FC<{ navData: { href: string; title: string }[] }> = ({ navData = [] }) => {
  return (
    <div className={classes.footerWithDemo}>
      <Demo />
      <Footer dark navData={navData} />
    </div>
  );
};
