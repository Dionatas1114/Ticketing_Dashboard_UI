import * as React from 'react';
import { ThemeOptions, ThemeProvider, createTheme } from '@mui/material/styles';

import { inputsCustomizations } from './custom/inputs';
import { dataDisplayCustomizations } from './custom/dataDisplay';
import { feedbackCustomizations } from './custom/feedback';
import { navigationCustomizations } from './custom/navigation';
import { surfacesCustomizations } from './custom/surfaces';
import { colorSchemes, typography, shadows, shape } from './themePrimitives';

interface AppThemeProps {
  children: React.ReactNode;
  disableCustomTheme?: boolean;
  themeComponents?: ThemeOptions['components'];
}

export default function AppTheme({ children, disableCustomTheme, themeComponents }: AppThemeProps) {
  if (disableCustomTheme) {
    return <React.Fragment>{children}</React.Fragment>;
  }

  const theme = React.useMemo(() => {
    if (disableCustomTheme) return {};

    return createTheme({
      cssVariables: {
        colorSchemeSelector: 'data-mui-color-scheme',
        cssVarPrefix: 'template',
      },
      colorSchemes, // building light & dark mode app, see https://mui.com/material-ui/customization/palette/#color-schemes
      typography,
      shadows,
      shape,
      components: {
        ...inputsCustomizations,
        ...dataDisplayCustomizations,
        ...feedbackCustomizations,
        ...navigationCustomizations,
        ...surfacesCustomizations,
        ...themeComponents,
      },
    });
  }, [disableCustomTheme, themeComponents]);

  return <ThemeProvider theme={theme} disableTransitionOnChange children={children} />;
}
