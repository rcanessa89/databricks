import * as React from 'react';
import Typography from '@mui/material/Typography';

import { MarkerIcon } from '../Icons';

export const ContactInfo: React.FC = () => (
  <>
    <Typography
      fontSize="0.875rem"
      color="#fff"
      lineHeight={1.2}
      mb={1}
      sx={(theme) => ({
        [theme.breakpoints.down('sm')]: {
          display: 'flex',
          justifyContent: 'center',
        },
      })}
    >
      ✆ +1 (877) 777-7777
    </Typography>
    <Typography
      display="flex"
      alignItems="center"
      fontSize="0.875rem"
      color="#fff"
      lineHeight={1.2}
      sx={(theme) => ({
        [theme.breakpoints.down('sm')]: {
          display: 'flex',
          justifyContent: 'center',
        },
      })}
    >
      <MarkerIcon />
      123 Main st, San Francisco, CA, 94107
    </Typography>
  </>
);
