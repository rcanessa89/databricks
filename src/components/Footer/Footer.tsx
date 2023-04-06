import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { FooterProps } from './types';

export const Footer: React.FC<FooterProps> = ({ text }) => (
  <Box
    py={3}
    px={1}
    component="footer"
    sx={{ backgroundColor: 'primary.main' }}
  >
    <Typography
      textAlign="center"
      lineHeight={1.2}
      color="#fff"
      fontSize="0.9375rem"
    >
      {text}
    </Typography>
  </Box>
);
