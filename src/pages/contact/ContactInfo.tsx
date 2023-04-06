import * as React from 'react';
import Typography from '@mui/material/Typography';

export const ContactInfo: React.FC = () => (
  <>
    <Typography variant="body1" mb={1.5625}>
      In publishing and graphic design, Lorem ipsum is a placeholder text
      commonly used to demonstrate the visual form of a document or a typeface
      without relying on meaningful content. Lorem ipsum may be used as a
      placeholder before the final copy is available.
    </Typography>
    <Typography variant="subtitle2" paddingLeft={0.5} mb={0.5}>
      Phone:
    </Typography>
    <Typography
      display="inline-block"
      component="a"
      fontSize="1.125rem"
      mb={3}
      color="#0B92F1"
      href="tel:+18777777777"
      fontWeight={500}
      style={{ textDecoration: 'none' }}
    >
      +1 (877) 777-7777
    </Typography>
    <Typography variant="subtitle2" paddingLeft={0.5} mb={1.125}>
      Hours:
    </Typography>
    <Typography fontSize="1rem" lineHeight={1.2}>
      Monday - Sunday:{' '}
      <Typography component="span" fontWeight={500}>
        7am - 11pm EST
      </Typography>
    </Typography>
  </>
);
