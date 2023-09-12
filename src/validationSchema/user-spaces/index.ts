import * as yup from 'yup';

export const userSpaceValidationSchema = yup.object().shape({
  user_id: yup.string().nullable().required(),
  space_id: yup.string().nullable().required(),
  permission_id: yup.string().nullable().required(),
});
