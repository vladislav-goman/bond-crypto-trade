import React from 'react';
import classes from './Footer.module.scss';
import { Footer } from './Footer';
import { Demo } from '../../section/Demo';

export const FooterWithDemo: React.FC = () => {
  return (
    <div className={classes.footerWithDemo}>
      <Demo />
      <Footer dark />
    </div>
  );
};
