import React, { useState } from 'react';
import { Box, Button, SelectChangeEvent } from '@mui/material';
import { ConnectionProps } from '../../../../../types/Connection';

import AddNewConnectionModal from './modal';

import { i18n } from '../../../../../translate/i18n';

const initialValues: ConnectionProps = {
  name: '',
  greetingMessage: '',
  farewellMessage: '',
  isDefault: false,
};

const AddNewConnection = () => {
  const [open, setOpen] = useState(false);
  const [selectedQueueIds, setSelectedQueueIds] = useState<number[]>([]);

  const handleSelectQueue = ({ target: { value } }: SelectChangeEvent<string[]>) => {
    const selectedIds = Array.isArray(value) ? value.map(Number) : [];
    setSelectedQueueIds(selectedIds);
  };

  const toggleOpen = () =>
    setOpen((prev) => {
      if (prev === true) setSelectedQueueIds([]);
      return !prev;
    });

  return (
    <Box>
      {/* Botão para adicionar nova conexão */}
      <Button
        variant="contained"
        color="primary"
        onClick={toggleOpen}
        sx={{
          textTransform: 'none',
          borderRadius: 2,
        }}
      >
        {i18n.t('connections.buttons.add')}
      </Button>

      <AddNewConnectionModal
        {...{ toggleOpen, open, initialValues, selectedQueueIds, handleSelectQueue }}
      />
    </Box>
  );
};

export default AddNewConnection;
