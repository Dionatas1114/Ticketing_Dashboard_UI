import * as React from 'react';
import {
  styled,
  MenuItem,
  Menu,
  Divider,
  ListItemText,
  ListItemIcon,
  listClasses,
  listItemIconClasses,
  dividerClasses,
  paperClasses,
} from '@mui/material';

import { LogoutRounded as LogoutIcon, MoreVertRounded as MoreVertIcon } from '@mui/icons-material';

import MenuButton from '../../../components/button/menuButton';

import useAuth from '../../../hooks/useAuth';
import { i18n } from '../../../translate/i18n';

const MuiMenuItem = styled(MenuItem)({
  margin: '2px 0',
});

export default function OptionsMenu() {
  const { handleLogout } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => setAnchorEl(null);

  const handleClickLogout = () => {
    handleCloseMenu();
    handleLogout();
  };

  return (
    <React.Fragment>
      <MenuButton aria-label="Open menu" onClick={handleClick} sx={{ borderColor: 'transparent' }}>
        <MoreVertIcon />
      </MenuButton>
      <Menu
        anchorEl={anchorEl}
        id="menu"
        open={open}
        onClose={handleCloseMenu}
        onClick={handleCloseMenu}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        sx={{
          [`& .${listClasses.root}`]: {
            padding: '4px',
          },
          [`& .${paperClasses.root}`]: {
            padding: 0,
          },
          [`& .${dividerClasses.root}`]: {
            margin: '4px -4px',
          },
        }}
      >
        <MuiMenuItem onClick={handleCloseMenu}>Profile</MuiMenuItem>
        <MuiMenuItem onClick={handleCloseMenu}>My account</MuiMenuItem>
        <Divider />
        <MuiMenuItem onClick={handleCloseMenu}>Add another account</MuiMenuItem>
        <MuiMenuItem onClick={handleCloseMenu}>Settings</MuiMenuItem>
        <Divider />
        <MuiMenuItem
          onClick={handleClickLogout}
          sx={{
            [`& .${listItemIconClasses.root}`]: {
              ml: 'auto',
              minWidth: 0,
            },
          }}
        >
          <ListItemText>{i18n.t('mainDrawer.appBar.user.logout')}</ListItemText>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
        </MuiMenuItem>
      </Menu>
    </React.Fragment>
  );
}
