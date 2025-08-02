import * as React from 'react';
import { Stack, Avatar, Box, Typography } from '@mui/material';

import OptionsMenu from '../../pages/Dashboard/SideMenu/OptionsMenu';
import { useAuthContext } from '../../context/AuthContext';

const UserProfile = ({ open = false }: { open?: boolean }) => {
  const { user } = useAuthContext();

  const avatarSize = open ? 24 : 36;
  const stackPadding = open ? 1 : 2;
  const stackProps = open
    ? { p: stackPadding, flexGrow: 1 }
    : { p: stackPadding, borderTop: '1px solid', borderColor: 'divider' };

  const props = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    display: 'block',
    maxWidth: '7rem',
  };

  return (
    <Stack direction="row" sx={{ ...stackProps, gap: 1, alignItems: 'center' }}>
      <Avatar
        sizes="small"
        alt={user.name}
        src={user.name}
        sx={{ width: avatarSize, height: avatarSize }}
      />
      <Box sx={{ mr: 'auto', mt: 'auto' }}>
        <Typography
          variant="body2"
          sx={{
            fontWeight: 500,
            lineHeight: '16px',
            ...props,
          }}
        >
          {user.name}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: 'text.secondary',
            ...props,
          }}
        >
          {user.email}
        </Typography>
      </Box>
      {!open && <OptionsMenu />}
    </Stack>
  );
};

export default React.memo(UserProfile);
