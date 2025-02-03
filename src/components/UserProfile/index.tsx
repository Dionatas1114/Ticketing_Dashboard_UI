import * as React from 'react';
import { Stack, Avatar, Box, Typography } from '@mui/material';

import OptionsMenu from '../../pages/Dashboard/SideMenu/OptionsMenu';

type UserProfileProps = {
  name: string;
  email: string;
  avatarUrl: string;
  open?: boolean;
};

const UserProfile = ({ name, email, avatarUrl, open = false }: UserProfileProps) => {
  const avatarSize = open ? 24 : 36;
  const stackPadding = open ? 1 : 2;
  const stackProps = open
    ? { p: stackPadding, flexGrow: 1 }
    : { p: stackPadding, borderTop: '1px solid', borderColor: 'divider' };

  return (
    <Stack direction="row" sx={{ ...stackProps, gap: 1, alignItems: 'center' }}>
      <Avatar
        sizes="small"
        alt={name}
        src={avatarUrl}
        sx={{ width: avatarSize, height: avatarSize }}
      />
      <Box sx={{ mr: 'auto' }}>
        <Typography variant="body2" sx={{ fontWeight: 500, lineHeight: '16px' }}>
          {name}
        </Typography>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          {email}
        </Typography>
      </Box>
      {!open && <OptionsMenu />}
    </Stack>
  );
};

export default React.memo(UserProfile);
