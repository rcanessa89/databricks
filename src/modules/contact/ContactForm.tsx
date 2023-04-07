import * as React from 'react';
import { FormProvider } from 'react-hook-form';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import { useContactContext } from './use-contact-context';
import { TextField } from '../../share/TextField';
import { Select } from '../../share/Select';

export const ContactForm: React.FC = () => {
  const { form, handleSubmit, emailInputRef } = useContactContext();

  return (
    <FormProvider {...form}>
      <form noValidate onSubmit={handleSubmit}>
        <Stack
          component="fieldset"
          spacing={3.25}
          sx={(theme) => ({
            marginBottom: 18.5,
            padding: 0,
            border: 0,
            [theme.breakpoints.down('md')]: {
              marginBottom: 4
            }
          })}
        >
          <TextField
            fullWidth
            inputRef={emailInputRef}
            name="email"
            label="Email"
            type="email"
          />
          <TextField fullWidth name="name" label="Name" />
          <TextField fullWidth name="phone" label="Phone Number" type="tel" />
          <Select name="help" label="How We Can Help You?">
            <MenuItem value="1">Press</MenuItem>
            <MenuItem value="2">Support</MenuItem>
            <MenuItem value="3">Demo</MenuItem>
          </Select>
        </Stack>
        <Box display="flex" justifyContent={{ sm: 'flex-end' }}>
          <Button
            type="submit"
            variant="contained"
            sx={(theme) => ({
              lineHeight: 1,
              fontWeight: 400,
              width: '10.875rem',
              height: '50px',
              display: 'inline-block',
              fontSize: '1.5625rem',
              textTransform: 'none',
              [theme.breakpoints.down('md')]: {
                width: '100%'
              }
            })}
          >
            Submit
          </Button>
        </Box>
      </form>
    </FormProvider>
  );
};
