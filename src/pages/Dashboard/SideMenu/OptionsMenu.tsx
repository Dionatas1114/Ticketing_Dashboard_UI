import * as React from 'react';

import { styled, MenuItem, Menu, Divider, ListItemText, ListItemIcon } from '@mui/material';
import { listClasses, listItemIconClasses, dividerClasses, paperClasses } from '@mui/material';

import { LogoutRounded as LogoutIcon, MoreVertRounded as MoreVertIcon } from '@mui/icons-material';

import MenuButton from '../../../components/Button/MenuButton';

const MuiMenuItem = styled(MenuItem)({
  margin: '2px 0',
});

export default function OptionsMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
        onClose={handleClose}
        onClick={handleClose}
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
        <MuiMenuItem onClick={handleClose}>Profile</MuiMenuItem>
        <MuiMenuItem onClick={handleClose}>My account</MuiMenuItem>
        <Divider />
        <MuiMenuItem onClick={handleClose}>Add another account</MuiMenuItem>
        <MuiMenuItem onClick={handleClose}>Settings</MuiMenuItem>
        <Divider />
        <MuiMenuItem
          onClick={handleClose}
          sx={{
            [`& .${listItemIconClasses.root}`]: {
              ml: 'auto',
              minWidth: 0,
            },
          }}
        >
          <ListItemText>Logout</ListItemText>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
        </MuiMenuItem>
      </Menu>
    </React.Fragment>
  );
}
