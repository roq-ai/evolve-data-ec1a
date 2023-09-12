import * as yup from 'yup';

export const permissionValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
});
