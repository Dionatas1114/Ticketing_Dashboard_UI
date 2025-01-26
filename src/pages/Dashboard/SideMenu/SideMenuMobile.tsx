import * as React from 'react';

import { Button, Divider, Drawer, drawerClasses, Stack } from '@mui/material';
import { LogoutRounded as LogoutIcon } from '@mui/icons-material';

import Notifications from '../../../components/notifications';
import UserProfile from '../../../components/userProfile';
import MenuContent from '../LeftBar';
// import CardAlert from './CardAlert';

interface SideMenuMobileProps {
  open: boolean | undefined;
  toggleDrawer: (newOpen: boolean) => () => void;
}

export default function SideMenuMobile({ open, toggleDrawer }: SideMenuMobileProps) {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={toggleDrawer(false)}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        [`& .${drawerClasses.paper}`]: {
          backgroundImage: 'none',
          backgroundColor: 'background.paper',
        },
      }}
    >
      <Stack
        sx={{
          maxWidth: '70dvw',
          height: '100%',
        }}
      >
        <Stack direction="row" sx={{ p: 2, pb: 0, gap: 1 }}>
          <UserProfile
            name="Riley Carter"
            email="riley@email.com"
            avatarUrl="/static/images/avatar/7.jpg"
            open
          />
          <Notifications />
        </Stack>
        <Divider />
        <Stack sx={{ flexGrow: 1 }}>
          <MenuContent />
          <Divider />
        </Stack>
        {/* <CardAlert /> */}
        <Stack sx={{ p: 2 }}>
          <Button variant="outlined" fullWidth startIcon={<LogoutIcon />}>
            Logout
          </Button>
        </Stack>
      </Stack>
    </Drawer>
  );
}
