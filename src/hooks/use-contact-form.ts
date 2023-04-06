import { z } from 'zod';

import { useForm } from './use-form';

const validationSchema = z.object({
  email: z
    .string()
    .min(1, 'Email required')
    .email('Invalid Email')
    .regex(
      new RegExp('^[a-zA-Z0-9_.+-]+@(?!(gmail)).*.[a-zA-Z]{2,6}$'),
      'Gmail is not allowed'
    ),
  name: z.string(),
  phone: z
    .string()
    .min(10, 'Phone number must contain minimum 10 digits')
    .max(14, 'Phone number must contain maximum 10 digits'),
  help: z.string(),
});

export const useContactForm = (
  onSubmit: (v: z.infer<typeof validationSchema>) => void
) => {
  const form = useForm({
    defaultValues: {
      email: '',
      name: '',
      phone: '',
      help: '',
    },
    schema: validationSchema,
  });
  const handleSubmit = form.handleSubmit(onSubmit);

  return {
    form,
    handleSubmit,
  };
};
