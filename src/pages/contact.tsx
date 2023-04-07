import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Grid from '@mui/material/Grid';

import { ContactProvider } from '../modules/contact/ContactProvider';
import { ContactLayout } from '../modules/contact/ContactLayout';
import { ContactForm } from '../modules/contact/ContactForm';
import { ContactInfo } from '../modules/contact/ContactInfo';

const Contact: React.FC<PageProps> = () => (
  <ContactProvider>
    <ContactLayout>
      <Grid container spacing={4}>
        <Grid item md={7.4961} xs={12}>
          <ContactForm />
        </Grid>
        <Grid item md={4.5039} xs={12}>
          <ContactInfo />
        </Grid>
      </Grid>
    </ContactLayout>
  </ContactProvider>
);

export default Contact;
export const Head: HeadFC = () => <title>Contact Page</title>;
