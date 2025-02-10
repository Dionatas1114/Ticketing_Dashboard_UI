import { useState } from 'react';
import { Box, Button } from '@mui/material';
import QrCodeModal from '../qrCodeModal';

const SessionLabel = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((prev) => !prev);

  return (
    <Box sx={{ textAlign: 'center', alignItems: 'center' }}>
      <Button variant="outlined" color="primary" size="small" onClick={toggleOpen}>
        Abrir QR Code
      </Button>
      {/* Modal para exibir o QR Code */}
      <QrCodeModal open={open} toggleOpen={toggleOpen} />
    </Box>
  );
};

export default SessionLabel;
