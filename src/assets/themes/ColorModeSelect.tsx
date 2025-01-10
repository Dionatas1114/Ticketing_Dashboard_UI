import * as React from 'react';
import {
  ListItemButton,
  ListItemIcon,
  MenuItem,
  Select,
  SelectProps,
  useColorScheme,
} from '@mui/material';
import {
  LightModeRounded as LightModeIcon,
  DarkModeRounded as DarkModeIcon,
  DevicesRounded as DevicesIcon,
} from '@mui/icons-material';

const icons = {
  system: <DevicesIcon />,
  light: <LightModeIcon />,
  dark: <DarkModeIcon />,
} as const;

const modes = ['system', 'light', 'dark'] as const;

const capitalizeMode = (mode: string) => mode[0].toUpperCase() + mode.slice(1);

// Dropdown
export function ColorModeSelectDropdown(props: SelectProps) {
  const { mode, setMode } = useColorScheme();
  if (!mode) return null;

  return (
    <Select
      value={mode}
      onChange={(e) => setMode(e.target.value as (typeof modes)[number])}
      {...props}
    >
      {modes.map((value) => (
        <MenuItem key={value} value={value}>
          {capitalizeMode(value)}
        </MenuItem>
      ))}
    </Select>
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
