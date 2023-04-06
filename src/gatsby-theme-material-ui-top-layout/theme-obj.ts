import { createTheme } from '@mui/material/styles';
import { type GatsbyLinkProps } from 'gatsby';

import { LinkBehavior } from './link-behavior';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#222427',
    },
  },
  typography: {
    fontFamily: 'Inter',
    h1: {
      fontSize: '1.5625rem',
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '1.5rem',
      lineHeight: 1.2,
      fontWeight: 400,
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: 1.2,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.2,
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.2,
      fontWeight: 400,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: ({ theme }) => ({
          [theme.breakpoints.up('lg')]: {
            maxWidth: '71.4375rem',
          },
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '5px',
          boxShadow: 'none',
        },
      },
    },
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      } as Omit<GatsbyLinkProps<Record<string, unknown>>, 'to' | 'ref'>,
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: '3.125rem',
        },
        input: {
          height: '1.0625rem',
        },
        notchedOutline: {
          borderColor: '#c4c4c4',
          borderRadius: '5px',
        },
      },
    },
  },
});
