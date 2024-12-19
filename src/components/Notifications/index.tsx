import React from 'react';

import { NotificationsRounded as NotificationsIcon } from '@mui/icons-material';

import MenuButton from '../Button/MenuButton';

interface NotificationMenuButtonProps {
  showBadge?: boolean;
}

const NotificationMenuButton = ({ showBadge }: NotificationMenuButtonProps) => {
  return (
    <MenuButton showBadge={showBadge} aria-label="Open notifications">
      <NotificationsIcon />
    </MenuButton>
  );
};

export default NotificationMenuButton;
