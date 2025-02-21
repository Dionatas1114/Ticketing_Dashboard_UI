import * as React from 'react';
import { styled, Drawer as MuiDrawer, drawerClasses, Divider } from '@mui/material';

// import SelectContent from './nonUse/SelectContent';
// import CardAlert from './CardAlert';
import MenuContent from '../LeftBar';

import UserProfile from '../../../components/UserProfile';

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
      {/* <Box
        sx={{
          display: 'flex',
          mt: 'calc(var(--template-frame-height, 0px) + 4px)',
          p: 1.5,
        }}
      >
        <SelectContent />
      </Box> */}
      <Divider />
      <MenuContent />
      {/* <CardAlert /> */}
      <UserProfile
        name="Riley Carter"
        email="riley@email.com"
        avatarUrl="/static/images/avatar/7.jpg"
      />
    </Drawer>
  );
}
