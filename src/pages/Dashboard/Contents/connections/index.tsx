import * as React from 'react';
import { Box, Grid2 as Grid } from '@mui/material';

import AddNewConnection from './AddNewConnection';
import CustomizedDataGrid from './CustomizedDataGrid';
import Title from '../../../../components/Title';

import { i18n } from '../../../../translate/i18n';

export default function Connections() {
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      <Title>
        {i18n.t('connections.title')}
        <AddNewConnection />
      </Title>

      <Grid container spacing={2} columns={12}>
        <Grid size={{ xs: 12, lg: 12 }}>
          <CustomizedDataGrid />
        </Grid>
      </Grid>
    </Box>
  );
}
