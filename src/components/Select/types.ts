import { type SelectProps as MuiSelectProps } from '@mui/material/Select';
import { type UseControllerProps, type RegisterOptions } from 'react-hook-form';

export type SelectProps = UseControllerProps &
  MuiSelectProps & {
    name: string;
    rules?: RegisterOptions;
  };
