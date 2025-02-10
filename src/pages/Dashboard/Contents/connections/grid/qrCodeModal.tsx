import { useState } from 'react';
import { Box, Button, Modal } from '@mui/material';
import { i18n } from '../../../../../translate/i18n';
import QRCode from './qrcode';

type QrCodeModalProps = {
  open: boolean;
  toggleOpen: () => void;
};

const QrCodeModal = ({ open, toggleOpen }: QrCodeModalProps) => (
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
      {/* Componente QR Code */}
      <QRCode />

      {/* Botão para fechar o modal */}
      <Button fullWidth variant="outlined" onClick={toggleOpen} sx={{ mt: 2 }}>
        {i18n.t('connections.qrcodeModal.close')}
      </Button>
    </Box>
  </Modal>
);

export default QrCodeModal;
