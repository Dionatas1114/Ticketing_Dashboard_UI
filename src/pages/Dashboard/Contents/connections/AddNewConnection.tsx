import React, { useState } from 'react';
import { Box, Button, Modal } from '@mui/material';
import QrCodeVerification from './qrcode';

const AddNewConnection: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      {/* Botão para adicionar nova conexão */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        sx={{
          textTransform: 'none',
          borderRadius: 2,
        }}
      >
        Add New Connection
      </Button>

      {/* Modal para exibir o QR Code */}
      <Modal
        open={open}
        onClose={handleClose}
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
          <QrCodeVerification />

          {/* Botão para fechar o modal */}
          <Button fullWidth variant="outlined" onClick={handleClose} sx={{ mt: 2 }}>
            Close
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default AddNewConnection;
