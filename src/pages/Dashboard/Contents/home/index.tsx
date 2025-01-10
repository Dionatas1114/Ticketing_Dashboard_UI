import { Box, Card, CardContent, Grid2 as Grid, Stack } from '@mui/material';
import Title from '../../../../components/Title';

export default function Queues() {
  return (
    <div>
      <Title>Home</Title>
      {/* Weather */}
      <Box>
        <Grid size={{ xs: 12, md: 6, lg: 9 }}>
          <Card
            variant="outlined"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              flexGrow: 1,
              borderRadius: 2,
            }}
          >
            <CardContent>
              <Stack direction="row" spacing={1}>
                <Title>TESTE</Title>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        {/* nuvem ou temperatura */}
        TESTE
        {/* Cidade */}
      </Box>
    </div>
  );
}
