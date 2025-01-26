import * as React from 'react';
import {
  Box,
  Grid2 as Grid,
  CardContent,
  Stack,
  FormControl,
  RadioGroup,
  useColorScheme,
  List,
  Chip,
  Typography,
} from '@mui/material';
import { MenuRounded as MenuIcon, Settings as SettingsIcon } from '@mui/icons-material';

import Title from '../../../../components/title';
import Card from '../../../../components/Card';
import { i18n } from '../../../../translate/i18n';
import { ColorModeList } from '../../../../assets/themes/ColorModeSelect';

export default function Settings() {
  const { mode, setMode } = useColorScheme();
  if (!mode) return null;

  const modes = ['system', 'light', 'dark'] as const;

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
                    // value={mode}
                    // onChange={(event) => setMode(event.target.value as 'system' | 'light' | 'dark')}
                  >
                    <List component="nav">
                      {/* <ListItemButton
                        sx={{
                          border: '1px solid',
                          borderRadius: 1,
                          display: 'flex',
                        }}
                        selected={mode === 'dark'}
                        onClick={() => setMode('dark')}
                      >
                        <ListItemIcon>
                          <MenuIcon />
                        </ListItemIcon>
                        <ListItemText primary="dark" />
                      </ListItemButton> */}
                      <ColorModeList />
                      {/* {modes.map((value) => (
                        <React.Fragment key={value}>
                          <ListItemButton
                            sx={{
                              border: '1px solid',
                              borderRadius: 1,
                              display: 'flex',
                            }}
                            selected={mode === value}
                            onClick={() => setMode(value)}
                          >
                            <ListItemIcon>
                              <MenuIcon />
                            </ListItemIcon>
                            <ListItemText primary={value} />
                          </ListItemButton>
                        </React.Fragment>
                      ))} */}
                    </List>
                    {/* <FormControlLabel value="dark" control={<Radio />} label="Dark" />
                    <FormControlLabel value="light" control={<Radio />} label="Light" />
                    <FormControlLabel value="system" control={<Radio />} label="System" /> */}
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
