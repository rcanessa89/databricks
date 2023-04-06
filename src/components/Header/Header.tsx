import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { HeaderProps } from './types';

export const Header: React.FC<HeaderProps> = ({ title }) => (
  <Box p={1} component="header" sx={{ backgroundColor: 'primary.main' }}>
    <Typography
      textAlign="center"
      fontWeight={400}
      color="#fff"
      fontSize="0.875rem"
    >
      {title}
    </Typography>
  </Box>
);
