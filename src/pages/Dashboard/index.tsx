import * as React from 'react';
import { Outlet } from 'react-router-dom';

import { alpha, Box, CssBaseline, Stack } from '@mui/material';

import SideMenu from './SideMenu/SideMenu';
import AppNavbar from './AppNavbar';
import Header from './Header';

import { PageSelectedProvider } from '../../context/PageSelectedContext';
import { ConnectionsProvider } from '../../context/ConnectionsContext';

import AppTheme from '../../assets/themes/AppTheme';

export default function Dashboard(props: { disableCustomTheme?: boolean }) {
  return (
    <PageSelectedProvider>
      <ConnectionsProvider>
        <AppTheme {...props}>
          <CssBaseline enableColorScheme />
          <Box sx={{ display: 'flex' }}>
            <SideMenu />
            <AppNavbar />
            {/* Main content */}
            <Box
              component="main"
              sx={(theme) => ({
                flexGrow: 1,
                backgroundColor: theme.vars
                  ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
                  : alpha(theme.palette.background.default, 1),
                overflow: 'auto',
              })}
            >
              <Stack
                spacing={2}
                sx={{
                  alignItems: 'center',
                  mx: 3,
                  pb: 5,
                  mt: { xs: 8, md: 0 },
                }}
              >
                <Header />
                <Outlet />
              </Stack>
            </Box>
          </Box>
        </AppTheme>
      </ConnectionsProvider>
    </PageSelectedProvider>
  );
}
