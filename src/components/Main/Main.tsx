import * as React from 'react';
import Box, { type BoxProps } from '@mui/material/Box';

export const Main: React.FC<React.PropsWithChildren<BoxProps>> = ({
  children,
  ...props
}) => (
  <Box component="main" flex="auto" {...props}>
    {children}
  </Box>
);
