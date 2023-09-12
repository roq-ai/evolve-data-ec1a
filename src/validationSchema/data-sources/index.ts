import * as yup from 'yup';

export const dataSourceValidationSchema = yup.object().shape({
  name: yup.string().required(),
  type: yup.string().nullable(),
  url: yup.string().nullable(),
  space_id: yup.string().nullable().required(),
});
