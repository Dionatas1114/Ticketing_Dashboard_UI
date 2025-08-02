import * as React from 'react';
import { styled, Drawer as MuiDrawer, drawerClasses, Divider } from '@mui/material';

import MenuContent from '../LeftBar';
import UserProfile from '../../../components/userProfile';

const drawerWidth = 240;

const Drawer = styled(MuiDrawer)({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: 'border-box',
  mt: 10,
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
    boxSizing: 'border-box',
  },
});

export default function SideMenu() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: 'none', md: 'block' },
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: 'background.paper',
        },
      }}
    >
      <UserProfile />
      <Divider />
      <MenuContent />
    </Drawer>
  );
}
