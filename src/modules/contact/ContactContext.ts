import * as React from 'react';
import { UseFormReturn } from 'react-hook-form';

export interface ContactContextType {
  emailInputRef: React.MutableRefObject<HTMLInputElement | null>;
  focusEmailInput: () => void;
  form: UseFormReturn<
    {
      email: string;
      name: string;
      phone: string;
      help: string;
    },
    any
  >;
  handleSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
}

export const ContactContext = React.createContext({} as ContactContextType);
