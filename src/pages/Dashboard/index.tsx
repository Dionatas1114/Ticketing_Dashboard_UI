import * as React from 'react';
import { Outlet } from 'react-router-dom';

import { alpha, CssBaseline, Box, Stack } from '@mui/material';

import SideMenu from './SideMenu/SideMenu';
import AppNavbar from './AppNavbar';
import Header from './Header';

import { MenuItemSelectedProvider } from '../../context/MenuItemSelectedContext';

import AppTheme from '../../assets/themes/AppTheme';

export default function Dashboard(props: { disableCustomTheme?: boolean }) {
  return (
    <MenuItemSelectedProvider>
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
              backgroundColor: alpha(theme.palette.background.default, 1),
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
    </MenuItemSelectedProvider>
  );
}
