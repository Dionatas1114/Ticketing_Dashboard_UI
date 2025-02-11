import { Box, CircularProgress, Grid2 as Grid } from '@mui/material';

import Title from '../../../../components/title';

import useUsers from '../../../../hooks/useUsers';
import { i18n } from '../../../../translate/i18n';

export default function Users() {
  const { users, loading } = useUsers();

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
        <CircularProgress aria-label={i18n.t('users.loading')} />
      ) : users.length === 0 ? (
        <p>{i18n.t('contacts.noData')}</p>
      ) : (
        users.map((user) => <div key={user.id}>{user.name}</div>)
      )}
    </Box>
  );
}
