import * as React from 'react';
import { Badge, badgeClasses, IconButton, IconButtonProps } from '@mui/material';

export type MenuButtonProps = {
  showBadge?: boolean;
} & IconButtonProps;

export default function MenuButton({ showBadge = false, ...props }: MenuButtonProps) {
  return (
    <Badge
      color="error"
      variant="dot"
      invisible={!showBadge}
      sx={{ [`& .${badgeClasses.badge}`]: { right: 2, top: 2 } }}
    >
      <IconButton size="small" {...props} />
    </Badge>
  );
}
