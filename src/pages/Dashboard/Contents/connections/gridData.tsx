import { Button, Chip } from '@mui/material';
import { GridRowsProp, GridColDef } from '@mui/x-data-grid';

function renderStatus(status: 'Online' | 'Offline') {
  const colors: { [index: string]: 'success' | 'error' } = {
    Online: 'success',
    Offline: 'error',
  };

  return <Chip label={status} color={colors[status]} size="small" />;
}

// {
//   field: 'status',
//   headerName: 'Status',
//   headerAlign: 'center',
//   align: 'center',
//   flex: 0.5,
//   minWidth: 80,
//   renderCell: (params: any) => renderStatus(params.value as any),
// },

const handleAddUser = (row: any) => {
  console.log('User added:', row);
}

export const columns: GridColDef[] = [
  { field: 'userName', headerName: 'User Name', flex: 1.5, minWidth: 200 },
  {
    field: 'status',
    headerName: 'Status',
    flex: 0.5,
    minWidth: 80,
    renderCell: (params: any) => renderStatus(params.value as any),
  },
  {
    field: 'session',
    headerName: 'Session',
    flex: 1,
    minWidth: 80,
    renderCell: (params) => (
      <Button
        variant="outlined"
        color="primary"
        size="small"
        onClick={() => handleAddUser(params.row)}
      >
        Add User
      </Button>
    ),
  },
  {
    field: 'actions',
    headerName: 'Actions',
    // headerAlign: 'right',
    // align: 'right',
    flex: 1,
    minWidth: 100,
    renderCell: (params) => (
      <Button
        variant="outlined"
        color="primary"
        size="small"
        onClick={() => handleAddUser(params.row)}
      >
        Add User
      </Button>
    ),
  },
];

export const rows: GridRowsProp = [
  {
    id: 1,
    userName: 'Homepage Overview',
    status: 'Online',
    // session: <Button variant="outlined">Outlined</Button>,
    // actions: 212423,
  },
];
