import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MuiSelect from '@mui/material/Select';
import {
  useFormContext,
  useFormState,
  useWatch,
  type FieldError
} from 'react-hook-form';

import { type SelectProps } from './types';

export const Select: React.FC<SelectProps> = ({
  children,
  name,
  label,
  rules,
  fullWidth,
  defaultValue = '',
  ...materialProperties
}) => {
  const { control, register } = useFormContext();
  const { errors } = useFormState({ control });
  const value = (useWatch({
    name,
    control
  }) || defaultValue) as string;
  const { ref, ...fields } = register(name, { ...rules, value });
  const error: FieldError = errors[name] as FieldError;
  const helperText: string = error?.message || '';

  return (
    <FormControl error={!!error} fullWidth={fullWidth}>
      <InputLabel id={`Select-label-${name}`}>{label}</InputLabel>
      <MuiSelect
        ref={ref}
        {...{
          id: `Select-${name}`,
          label,
          labelId: `Select-label-${name}`,
          value,
          fullWidth,
          ...fields,
          ...materialProperties
        }}
      >
        {children}
      </MuiSelect>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};
