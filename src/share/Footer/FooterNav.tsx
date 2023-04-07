import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';

import { ContactInfo } from './ContactInfo';
import { FooterNavList } from './FooterNavList';
import { type FooterNavProps } from './types';
import { Arrow } from '../Icons';

const leftItems = [
  {
    text: 'Azure',
    link: '/Azure'
  },
  {
    text: 'AWS',
    link: '/AWS'
  },
  {
    text: 'Google',
    link: '/Google'
  }
];
const rightItems = [
  {
    text: 'Terms Of Service',
    link: '/terms-of-service'
  },
  {
    text: 'Privacy Policy',
    link: '/privacy-policy'
  },
  {
    text: 'Support',
    link: '/support'
  }
];

export const FooterNav: React.FC<FooterNavProps> = ({ onArrowClick }) => {
  return (
    <Box
      py={{
        md: 12.25,
        sm: 4
      }}
      sx={{ backgroundColor: 'primary.main' }}
      borderBottom="solid 1px #fff"
    >
      <Container>
        <Grid container spacing={4} mt={{ xs: 1 }} pb={{ xs: 2 }}>
          <Grid item md={6} sm={12} xs={12}>
            <ContactInfo />
          </Grid>
          <Grid item md={2} sm={4} xs={12}>
            <FooterNavList title="Free Trial" items={leftItems} />
          </Grid>
          <Grid item md={2} sm={4} xs={12}>
            <FooterNavList title="Resouces" items={rightItems} />
          </Grid>
          <Grid
            item
            md={2}
            sm={4}
            xs={12}
            display="flex"
            flexDirection="column"
            alignItems={{
              sm: 'flex-end',
              xs: 'center'
            }}
          >
            <IconButton onClick={onArrowClick}>
              <Arrow />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
