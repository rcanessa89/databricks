import * as React from 'react';

import { ContactContext } from './ContactContext';
import { useContactForm } from '../../hooks/use-contact-form';

export const ContactProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { form, handleSubmit } = useContactForm((v) => console.log(v));
  const emailInputRef = React.useRef<HTMLInputElement | null>(null);
  const focusEmailInput = () => {
    if (emailInputRef.current) {
      emailInputRef.current.focus();
    }
  };

  const value = {
    emailInputRef,
    form,
    handleSubmit,
    focusEmailInput,
  };

  return (
    <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
  );
};
