import * as React from 'react';
import { useFormik } from 'formik';
import {
  Box,
  Modal,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  SelectChangeEvent,
} from '@mui/material';

import { ConnectionProps } from '../../../../../types/Connection';

import Title from '../../../../../components/title';
import InputUserName from '../../../../../components/inputs/inputUserName';
import SubmitBox from '../../../../../components/box/submitBox';
import SubmitButton from '../../../../../components/button/submitButton';
import InputMultiline from '../../../../../components/inputs/inputMultiline';
import CancelButton from '../../../../../components/button/cancelButton';
import QueueSelect from './QueueSelect';

import { connectionSchema } from '../../../../../validations/schemas/connectionSchema';

import { i18n } from '../../../../../translate/i18n';

type ConnectionModalProps = {
  toggleOpen: () => void;
  open: boolean;
  initialValues: ConnectionProps;
  selectedQueueIds: number[];
  handleSelectQueue: ({ target: { value } }: SelectChangeEvent<string[]>) => void;
};

const AddNewConnectionModal = ({
  toggleOpen,
  open,
  initialValues,
  selectedQueueIds,
  handleSelectQueue,
}: ConnectionModalProps) => {
  const { handleSubmit, resetForm, handleChange, values, isSubmitting, touched, errors } =
    useFormik<ConnectionProps>({
      initialValues,
      validationSchema: connectionSchema,
      onSubmit: ({ name, ...rest }, { setSubmitting }) => {
        const values2 = { name: name.trim(), ...rest };
        setTimeout(async () => {
          setSubmitting(false);
          console.log('HandleSaveConnection values2: ', values2);
          // await HandleSaveConnection(values);
          resetForm();
        }, 500);
      },
    });

  return (
    <Modal
      open={open}
      onClose={toggleOpen}
      aria-labelledby="add-connection-title"
      aria-describedby="add-connection-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
          maxWidth: '90%',
        }}
      >
        <Title id="add-connection-title">{i18n.t('connections.buttons.add')}</Title>
        <Divider sx={{ mb: 2 }} />
        <SubmitBox handleSubmit={handleSubmit} gap={1}>
          <FormControl>
            <FormLabel htmlFor="name">{i18n.t('whatsappModal.form.name')}</FormLabel>
            <InputUserName
              id="connection name"
              value={values.name}
              onChange={handleChange}
              color={touched.name && Boolean(errors.name) ? 'error' : 'primary'}
              error={touched.name && Boolean(errors.name)}
              helperText={(touched.name && errors.name) || ' '}
              placeholder={i18n.t('whatsappModal.form.name')}
            />
          </FormControl>
          <FormControlLabel
            label={i18n.t('whatsappModal.form.default')}
            control={
              <Checkbox
                color="primary"
                name="isDefault"
                onChange={handleChange}
                checked={values.isDefault}
              />
            }
          />
          <FormControl>
            <FormLabel htmlFor="greetingMessage">
              {i18n.t('queueModal.form.greetingMessage')}
            </FormLabel>
            <InputMultiline
              name="greetingMessage"
              value={values.greetingMessage}
              onChange={handleChange}
              placeholder={i18n.t('form.optional')}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="farewellMessage">
              {i18n.t('whatsappModal.form.farewellMessage')}
            </FormLabel>
            <InputMultiline
              name="farewellMessage"
              value={values.farewellMessage}
              onChange={handleChange}
              placeholder={i18n.t('form.optional')}
            />
          </FormControl>
          <QueueSelect {...{ selectedQueueIds, handleSelectQueue }} />
          <CancelButton toggleOpen={toggleOpen} children={i18n.t('whatsappModal.buttons.cancel')} />
          <SubmitButton isSubmitting={isSubmitting}>
            {i18n.t('whatsappModal.buttons.okAdd')}
          </SubmitButton>
        </SubmitBox>
      </Box>
    </Modal>
  );
};

export default AddNewConnectionModal;
