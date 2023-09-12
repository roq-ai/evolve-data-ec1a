import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createUserSpace } from 'apiSdk/user-spaces';
import { userSpaceValidationSchema } from 'validationSchema/user-spaces';
import { UserInterface } from 'interfaces/user';
import { SpaceInterface } from 'interfaces/space';
import { PermissionInterface } from 'interfaces/permission';
import { getUsers } from 'apiSdk/users';
import { getSpaces } from 'apiSdk/spaces';
import { getPermissions } from 'apiSdk/permissions';
import { UserSpaceInterface } from 'interfaces/user-space';

function UserSpaceCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: UserSpaceInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createUserSpace(values);
      resetForm();
      router.push('/user-spaces');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<UserSpaceInterface>({
    initialValues: {
      user_id: (router.query.user_id as string) ?? null,
      space_id: (router.query.space_id as string) ?? null,
      permission_id: (router.query.permission_id as string) ?? null,
    },
    validationSchema: userSpaceValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'User Spaces',
              link: '/user-spaces',
            },
            {
              label: 'Create User Space',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create User Space
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={getUsers}
            labelField={'email'}
          />
          <AsyncSelect<SpaceInterface>
            formik={formik}
            name={'space_id'}
            label={'Select Space'}
            placeholder={'Select Space'}
            fetcher={getSpaces}
            labelField={'name'}
          />
          <AsyncSelect<PermissionInterface>
            formik={formik}
            name={'permission_id'}
            label={'Select Permission'}
            placeholder={'Select Permission'}
            fetcher={getPermissions}
            labelField={'name'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/user-spaces')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'user_space',
    operation: AccessOperationEnum.CREATE,
  }),
)(UserSpaceCreatePage);
