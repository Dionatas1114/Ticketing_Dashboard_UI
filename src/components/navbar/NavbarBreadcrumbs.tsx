import * as React from 'react';

import { styled, Typography, Breadcrumbs, breadcrumbsClasses } from '@mui/material';
import { NavigateNextRounded as NavigateNextIcon } from '@mui/icons-material';

import PageSelectedContext from '../../context/PageSelectedContext';

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  [`& .${breadcrumbsClasses.separator}`]: {
    color: (theme.vars || theme).palette.action.disabled,
    margin: 1,
  },
  [`& .${breadcrumbsClasses.ol}`]: {
    alignItems: 'center',
  },
}));

export default function NavbarBreadcrumbs() {
  const context = React.useContext(PageSelectedContext);

  if (!context) throw new Error('Error with ItemSelectedProvider');

  return (
    <StyledBreadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
      <Typography variant="body1">Dashboard</Typography>
      <Typography variant="body1" sx={{ color: 'text.primary', fontWeight: 600 }}>
        {context.pageSelected}
      </Typography>
    </StyledBreadcrumbs>
  );
}
