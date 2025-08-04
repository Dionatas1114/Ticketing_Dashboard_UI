import * as React from 'react';

import { Box, Button, Modal, Typography, Card, Chip } from '@mui/material';
import QrCodeIcon from '@mui/icons-material/QrCode';
import { GridRowsProp, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

import Grid from '../../../../components/grid';
import QRCodeComponent from '../../../../components/qrcode';

import { useConnectionContext } from '../../../../context/ConnectionsContext';
import { i18n } from '../../../../translate/i18n';

type QrCodeModalProps = {
  open: boolean;
  toggleOpen: () => void;
};

function QRCode() {
  const [qrCode, setQrCode] = React.useState('');

  const { connections } = useConnectionContext();
  const handleGenerateQrCode = () => {
    console.log('🚀 ~ handleGenerateQrCode ~ connections[0].qrcode:', connections[0].qrcode);
    setQrCode(connections[0].qrcode || '');
  };

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
          pt: 1,
          mb: 3,
        }}
      >
        <Typography variant="caption" color="text.secondary">
          {qrCode ? (
            <QRCodeComponent value={qrCode} />
          ) : (
            <QrCodeIcon sx={{ width: 150, height: 150 }} />
          )}
        </Typography>
      </Box>

      {/* Botão de geração do QR Code */}
      <Button
        fullWidth
        variant="contained"
        color="primary"
        sx={{ textTransform: 'none' }}
        onClick={handleGenerateQrCode}
      >
        {i18n.t('connections.qrcodeModal.generateQrCode')}
      </Button>
    </Card>
  );
}

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

const colors: { [index: string]: 'success' | 'error' } = {
  Online: 'success',
  Offline: 'error',
};

export type Status = 'Online' | 'Offline';

const StatusLabel = ({ status }: { status: Status }) => (
  <Chip label={status} color={colors[status]} size="small" />
);

const SessionLabel = () => {
  const [open, setOpen] = React.useState(false);
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

const EditLabel = (params: any) => {
  const handleAddUser = (row: any) => console.log('User added:', row);

  return (
    <Box sx={{ textAlign: 'center', alignItems: 'center' }}>
      <Button
        variant="outlined"
        color="primary"
        size="small"
        onClick={() => handleAddUser(params.row)}
      >
        Add User
      </Button>
      <Button
        variant="outlined"
        color="primary"
        size="small"
        onClick={() => handleAddUser(params.row)}
      >
        Edit User
      </Button>
    </Box>
  );
};

const columns: GridColDef[] = [
  { field: 'userName', headerName: 'User Name', flex: 1.5, minWidth: 200 },
  {
    field: 'status',
    headerName: 'Status',
    flex: 0.5,
    minWidth: 80,
    renderCell: (params: GridRenderCellParams) => <StatusLabel status={params.value as Status} />,
  },
  {
    field: 'session',
    headerName: 'Session',
    flex: 1,
    minWidth: 80,
    renderCell: () => <SessionLabel />,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    // headerAlign: 'right',
    // align: 'right',
    flex: 1,
    minWidth: 100,
    renderCell: (params: GridRenderCellParams) => <EditLabel params={params} />,
  },
];

// const rows: GridRowsProp = [
//   {
//     id: 1,
//     userName: 'Homepage Overview',
//     status: 'Online',
//     // session: <Button variant="outlined">Outlined</Button>,
//     // actions: 212423,
//   },
// ];

export default function ConnectionsGrid() {
  const { connections } = useConnectionContext();

  const rows: GridRowsProp = connections.map(({ id, name: userName, status }) => ({
    id,
    userName,
    status,
  }));

  return <Grid columns={columns} rows={rows} />;
}
