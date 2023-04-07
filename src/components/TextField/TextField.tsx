import * as React from 'react';
import MuiTextField from '@mui/material/TextField';
import { useFormContext, useFormState, type FieldError } from 'react-hook-form';

import { type TextFieldProps } from './types';
import { combineRefs } from '../../utils';

export const TextField: React.FC<TextFieldProps> = ({
  name,
  value,
  shouldUnregister = false,
  rules = {},
  inputRef,
  ...materialProperties
}) => {
  const { register, control } = useFormContext();
  const { errors } = useFormState({ control });
  const { ref, ...fields } = register(name, {
    ...rules,
    shouldUnregister,
    value
  });
  const id = `TextField-${name}`;
  const error = errors[name] as FieldError;
  const props = {
    id,
    inputRef: inputRef ? combineRefs(ref, inputRef) : ref,
    error: !!error,
    helperText: error?.message,
    ...fields,
    ...materialProperties
  };

  return <MuiTextField {...props} />;
};
