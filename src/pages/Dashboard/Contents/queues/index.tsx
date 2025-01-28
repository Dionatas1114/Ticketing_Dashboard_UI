import { Box, Grid2 as Grid, CircularProgress } from '@mui/material';

import Title from '../../../../components/title';

import useQueues from '../../../../hooks/useQueues';
import { i18n } from '../../../../translate/i18n';

export default function Main() {
  const { queues, loading } = useQueues();

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: { sm: '100%', md: '1700px' },
        margin: '0 auto',
        padding: '16px',
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Grid size={{ xs: 12, md: 6, lg: 9 }}>
          <Title>{i18n.t('queues.title')}</Title>
        </Grid>
      </Grid>

      {loading ? (
        <CircularProgress aria-label={i18n.t('queues.loading')} />
      ) : queues.length === 0 ? (
        <p>{i18n.t('queues.noData')}</p>
      ) : (
        queues.map((queue) => <div key={queue.id}>{queue.name}</div>)
      )}
    </Box>
  );
}
