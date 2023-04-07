import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import { FooterNavListProps } from './types';

export const FooterNavList: React.FC<FooterNavListProps> = ({
  title,
  items
}) => (
  <Stack spacing={2}>
    <Typography
      fontSize="1em"
      color="#fff"
      fontWeight={500}
      textAlign={{ sm: 'left', xs: 'center' }}
    >
      {title}
    </Typography>
    <Stack disablePadding component={List} spacing={2.75}>
      {items.map(({ text, link }) => (
        <ListItem
          disablePadding
          disableGutters
          key={link}
          alignItems="flex-start"
          sx={(theme) => ({
            [theme.breakpoints.down('sm')]: {
              display: 'block',
              textAlign: 'center'
            }
          })}
        >
          <Link
            color="#fff"
            fontSize="0.875em"
            href={link}
            sx={{
              cursor: 'pointer',
              textDecoration: 'none'
            }}
          >
            {text}
          </Link>
        </ListItem>
      ))}
    </Stack>
  </Stack>
);
