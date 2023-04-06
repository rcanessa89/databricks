import * as React from 'react';

import { ContactContext } from './ContactContext';

export const useContactContext = () => {
  const context = React.useContext(ContactContext);

  if (!context) {
    throw new Error('Contact context is required');
  }

  return context;
};
