import * as React from 'react';
import {
  Box,
  IconButton,
  IconButtonOwnProps,
  ListItemButton,
  ListItemIcon,
  Menu,
  MenuItem,
  useColorScheme,
  PaletteMode,
} from '@mui/material';

import {
  LightModeRounded as LightModeIcon,
  DarkModeRounded as DarkModeIcon,
  DevicesRounded as DevicesIcon,
} from '@mui/icons-material';

type ColorMode = PaletteMode | 'system';

const modes: ColorMode[] = ['system', 'light', 'dark'];

const capitalizeMode = (mode: string) => mode[0].toUpperCase() + mode.slice(1);

const icons = {
  system: <DevicesIcon />,
  light: <LightModeIcon />,
  dark: <DarkModeIcon />,
} as const;

// Dropdown
export function ColorModeSelectDropdown(props: IconButtonOwnProps) {
  const { mode, systemMode, setMode } = useColorScheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleMode = (targetMode: (typeof modes)[number]) => () => {
    setMode(targetMode);
    handleClose();
  };

  if (!mode) {
    return (
      <Box
        sx={{
          display: 'inline-flex',
          width: '2.25rem',
          height: '2.25rem',
          borderRadius: 'borderRadius',
          border: '1px solid',
          borderColor: 'divider',
        }}
      />
    );
  }

  const resolvedMode = (systemMode || mode) as PaletteMode;

  return (
    <>
      <IconButton
        onClick={handleClick}
        aria-controls={anchorEl ? 'color-scheme-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={anchorEl ? 'true' : undefined}
        {...props}
      >
        {icons[resolvedMode]}
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {modes.map((value) => (
          <MenuItem key={value} selected={mode === value} onClick={handleMode(value)}>
            {capitalizeMode(value)}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

// List
export function ColorModeList() {
  const { mode, setMode } = useColorScheme();
  if (!mode) return null;

  return (
    <>
      {modes.map((value) => (
        <React.Fragment key={value}>
          <ListItemButton
            sx={{
              border: '1px solid',
              borderRadius: 1,
              display: 'flex',
              marginBottom: 1,
              gap: 1,
            }}
            selected={mode === value}
            onClick={() => setMode(value)}
          >
            <ListItemIcon>{icons[value]}</ListItemIcon>
            {capitalizeMode(value)}
          </ListItemButton>
        </React.Fragment>
      ))}
    </>
  );
}
