import * as React from 'react';
import { Stack } from '@mui/material';

// import CustomDatePicker from './CustomDatePicker';
import Search from '../../../components/Search';
import NavbarBreadcrumbs from './NavbarBreadcrumbs';
import Notifications from '../../../components/Notifications';

import ColorModeIconDropdown from '../../../assets/themes/ColorModeSelect';

export default function Header() {
  return (
    <Stack
      direction="row"
      sx={{
        display: { xs: 'none', md: 'flex' },
        width: '100%',
        alignItems: { xs: 'flex-start', md: 'center' },
        justifyContent: 'space-between',
        maxWidth: { sm: '100%', md: '1700px' },
        pt: 1.5,
      }}
      spacing={2}
    >
      <NavbarBreadcrumbs />
      <Stack direction="row" sx={{ gap: 1 }}>
        <Search />
        {/* <CustomDatePicker /> */}
        <Notifications />
        <ColorModeIconDropdown />
      </Stack>
    </Stack>
  );
}