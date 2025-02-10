import React from 'react';
import { Box, Button, Typography, Card } from '@mui/material';
import QrCodeIcon from '@mui/icons-material/QrCode';
import { i18n } from '../../../../../translate/i18n';

export default function QRCode() {
  return (
    <Card
      sx={{
        width: 400,
        borderRadius: 2,
        boxShadow: 3,
        padding: 3,
        textAlign: 'center',
      }}
    >
      {/* Cabeçalho */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <Box
          sx={{
            width: 40,
            height: 40,
            // backgroundColor: '#E0F7FA',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <QrCodeIcon sx={{ color: '#007FFF' }} />
        </Box>
      </Box>
      <Typography variant="h6" component="h2" sx={{ mb: 1 }}>
        {i18n.t('connections.qrcodeModal.title')}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        {i18n.t('connections.qrcodeModal.generateQrCode')}
      </Typography>

      {/* QR Code Placeholder */}
      <Box
        sx={{
          width: 200,
          height: 200,
          backgroundColor: '#F5F5F5',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 2,
          mb: 3,
        }}
      >
        <Typography variant="caption" color="text.secondary">
          <QrCodeIcon sx={{ width: 150, height: 150 }} />
        </Typography>
      </Box>

      {/* Botão de geração do QR Code */}
      <Button fullWidth variant="contained" color="primary" sx={{ textTransform: 'none' }}>
        {i18n.t('connections.qrcodeModal.generateQrCode')}
      </Button>
    </Card>
  );
}
