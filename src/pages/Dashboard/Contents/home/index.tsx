import { Box, Grid } from '@mui/material';

import Title from '../../../../components/title';
import { i18n } from '../../../../translate/i18n';

export default function Home() {
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      <Grid
        size={{ xs: 12, md: 6, lg: 9 }}
        sx={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <Title>{i18n.t('home.title')}</Title>
      </Grid>
      {/* <Tickets /> */}
      Tickets
    </Box>
  );
}
