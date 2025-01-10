import React from 'react';
import { Box, Button, TextField, Typography, Stack, IconButton, Card } from '@mui/material';
import QrCodeIcon from '@mui/icons-material/QrCode'; // Ícone ilustrativo, substitua pelo real se necessário.

export default function QRCodeVerification() {
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
        Scan QR code
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Click to Generate QR code
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

      {/* Campo de entrada manual */}
      {/* <TextField
        fullWidth
        placeholder="Enter the code manually"
        variant="outlined"
        size="small"
        slotProps={{
          input: {
            endAdornment: (
              <IconButton>
                <QrCodeIcon />
              </IconButton>
            ),
          },
        }}
        sx={{ mb: 2 }}
      /> */}

      {/* Botão de verificação */}
      <Button fullWidth variant="contained" color="primary" sx={{ textTransform: 'none' }}>
        Generate QR code
      </Button>
    </Card>
  );
}
