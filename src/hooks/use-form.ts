import { useForm as RHFuseForm, FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Schema } from 'zod';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type UseFormArgs<T extends FieldValues = FieldValues, C = any> = Parameters<
  typeof RHFuseForm<T, C>
>[0] & { schema?: Schema };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useForm = <T extends FieldValues = FieldValues, C = any>({
  schema,
  ...props
}: UseFormArgs<T, C>) =>
  RHFuseForm({
    ...(schema ? { resolver: zodResolver(schema) } : {}),
    ...props,
  });
