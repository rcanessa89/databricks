import * as React from 'react';
import { useFormState } from 'react-hook-form';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { useContactContext } from './use-contact-context';
import { Header } from '../../share/Header';
import { Main } from '../../share/Main';
import { Footer, FooterNav } from '../../share/Footer';

export const ContactLayout: React.FC<React.PropsWithChildren> = ({
  children
}) => {
  const { form, focusEmailInput } = useContactContext();
  const { isSubmitSuccessful } = useFormState({ control: form.control });

  return (
    <>
      <Header title="Learn more about our latest features" />
      <Main sx={{ py: 1.5 }}>
        {isSubmitSuccessful ? (
          <Container>
            <Typography variant="h2" textAlign="center">
              Thank you
            </Typography>
          </Container>
        ) : (
          <Container>
            <div>
              <Typography variant="h1" textAlign="center" mb={7.75}>
                Company Name
              </Typography>
              <Typography variant="h2" mb={2.75}>
                Contact Us
              </Typography>
              <Typography variant="body2" mb={5.75}>
                Please provide some information to get started.
              </Typography>
            </div>
            {children}
          </Container>
        )}
      </Main>
      <FooterNav onArrowClick={focusEmailInput} />
      <Footer text="© 2022 Example " />
    </>
  );
};
