import * as React from 'react';
import { Avatar, Box, Button, Chip, Fab } from '@mui/material';
import { GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Groups as GroupsIcon, Person as PersonIcon } from '@mui/icons-material';

import useContacts from '../../../../hooks/useContacts';

import Grid from '../../../../components/grid';
import { filterBrazilNumber, phoneNumberFormat } from '../../../../utils/functions/phoneNuber';
import { i18n } from '../../../../translate/i18n';

const EditLabel = (params: any) => {
  const handleAddUser = (row: any) => console.log('User added:', row);

  return (
    <Box sx={{ textAlign: 'center' }}>
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

const widths = {
  xsmall: 50,
  small: 80,
  medium: 150,
  large: 300,
  xlarge: 450,
};

const columns: GridColDef[] = [
  {
    field: 'profilePicUrl',
    headerName: i18n.t('contacts.table.profile'),
    headerAlign: 'center',
    display: 'flex',
    align: 'center',
    width: widths.medium,
    renderCell: (params) => (
      // <Avatar
      //   sx={{
      //     width: widths.xsmall,
      //     height: widths.xsmall,
      //   }}
      //   src={params.row.profilePicUrl}
      // />

      // <Chip
      //   avatar={<Avatar src={params.row.profilePicUrl} />}
      //   deleteIcon={params.row.isGroup ? <GroupsIcon /> : <PersonIcon />}
      //   onDelete={() => console.log('delete')}
      //   color={params.row.isGroup ? 'default' : 'success'}
      //   variant="outlined"
      //   size="medium"
      // />
      <Fab
        variant="extended"
        sx={{ maxWidth: widths.small }}
        color={params.row.isGroup ? 'warning' : 'success'}
      >
        <Avatar src={params.row.profilePicUrl} sx={{ mr: 1 }} />
        {params.row.isGroup ? <GroupsIcon /> : <PersonIcon />}
      </Fab>
    ),
  },
  {
    field: 'contactName',
    headerName: i18n.t('contacts.table.name'),
    flex: 1.5,
    maxWidth: widths.large,
  },
  {
    field: 'number',
    headerName: i18n.t('contacts.table.whatsapp'),
    flex: 1.5,
    maxWidth: widths.large,
  },
  {
    field: 'actions',
    headerName: i18n.t('contacts.table.actions'),
    headerAlign: 'center',
    width: widths.large,
    renderCell: (params) => <EditLabel params={params} />,
  },
];

export default function ContactsGrid() {
  const { contacts } = useContacts();

  const rows: GridRowsProp = contacts.map(({ name, number, isGroup, ...rest }) => ({
    contactName: filterBrazilNumber(name),
    number: phoneNumberFormat(number, isGroup),
    isGroup,
    ...rest,
  }));

  return <Grid columns={columns} rows={rows} sx={{ display: 'flex', justifyContent: 'center' }} />;
}
