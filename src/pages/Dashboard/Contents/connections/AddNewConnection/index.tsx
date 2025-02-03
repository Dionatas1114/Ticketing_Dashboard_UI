import React, { useState } from 'react';
import { Box, Button } from '@mui/material';

// import QrCodeVerification from '../qrcode';
import { i18n } from '../../../../../translate/i18n';
import AddNewConnectionModal from './modal';

const AddNewConnection = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((prev) => !prev);

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

      <AddNewConnectionModal {...{ toggleOpen, open }} />

      {/* Modal para exibir o QR Code */}
      {/* <Modal
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
          {/* Componente QR Code */}
      {/* <QrCodeVerification /> */}

      {/* Botão para fechar o modal */}
      {/* <Button fullWidth variant="outlined" onClick={toggleOpen} sx={{ mt: 2 }}>
            {i18n.t('connections.qrcodeModal.close')}
          </Button>
        </Box>
      </Modal> */}
    </Box>
  );
};

export default AddNewConnection;
