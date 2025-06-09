import * as React from 'react';
import {
  Box,
  Grid,
  CardContent,
  Stack,
  FormControl,
  RadioGroup,
  List,
  Chip,
  Typography,
} from '@mui/material';
import { Settings as SettingsIcon } from '@mui/icons-material';

import Title from '../../../../components/title';
import Card from '../../../../components/card';
import { i18n } from '../../../../translate/i18n';
import { ColorModeList } from '../../../../assets/themes/ColorModeSelect';

export default function Settings() {
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      <Title>{i18n.t('connections.buttons.qrcode')}</Title>
      <Grid container spacing={2} columns={12} sx={{ mb: (theme) => theme.spacing(2) }}>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          Settings
          <Card>
            <CardContent>
              <Stack direction="row" spacing={1}>
                <Typography variant="h4" component="p">
                  1.3M
                </Typography>
                <Chip size="small" color="error" label="-8%" />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 9 }}>
          <Card>
            <CardContent>
              <Stack direction="row" spacing={1}>
                <FormControl>
                  <Title sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, mt: 1 }}>
                    <SettingsIcon fontSize="small" />
                    Theme options
                  </Title>
                  <RadioGroup
                    aria-labelledby="settings-theme-toggle"
                    name="settings-theme-toggle"
                    defaultValue="dark"
                  >
                    <List component="nav">
                      <ColorModeList />
                    </List>
                  </RadioGroup>
                </FormControl>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
