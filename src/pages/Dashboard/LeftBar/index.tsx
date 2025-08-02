import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import {
  HomeRounded as HomeRoundedIcon,
  WhatsApp as WhatsAppIcon,
  ContactPage as ContactPageIcon,
  AssignmentRounded as AssignmentIcon,
  PeopleRounded as PeopleRoundedIcon,
  SyncAlt as ConnectionIcon,
  Queue as QueueIcon,
  SettingsRounded as SettingsRoundedIcon,
} from '@mui/icons-material';

// import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
// import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
// import HelpRoundedIcon from '@mui/icons-material/HelpRounded';

import { useAuthContext } from '../../../context/AuthContext';
import { usePageSelectedContext } from '../../../context/PageSelectedContext';
import Router from '../../../components/router';
import Weather from '../../../components/weather';
import { i18n } from '../../../translate/i18n';

type PageType = {
  readonly route: string;
  readonly icon: React.JSX.Element;
};

const homePage: PageType = {
  route: 'home',
  icon: <HomeRoundedIcon />,
};

const mainListPages: PageType[] = [
  homePage,
  { route: 'tickets', icon: <WhatsAppIcon /> },
  { route: 'contacts', icon: <ContactPageIcon /> },
];

const adminListPages: PageType[] = [
  { route: 'quickAnswers', icon: <AssignmentIcon /> },
  { route: 'users', icon: <PeopleRoundedIcon /> },
  { route: 'connections', icon: <ConnectionIcon /> },
  { route: 'queues', icon: <QueueIcon /> },
];

const secondaryListPages: PageType[] = [
  { route: 'settings', icon: <SettingsRoundedIcon /> },
  // { route: 'About', icon: <InfoRoundedIcon /> },
  // { route: 'Feedback', icon: <HelpRoundedIcon /> },
];

const renderPages = (
  pages: PageType[],
  pageSelected: string,
  handleSelectPage: (page: PageType) => void
) =>
  pages.map((page) => (
    <ListItem key={page.route} disablePadding sx={{ display: 'block' }}>
      <Router
        to={page.route}
        selected={page.route === pageSelected}
        onClick={() => handleSelectPage(page)}
      >
        <ListItemIcon>{page.icon}</ListItemIcon>
        <ListItemText primary={i18n.t(`mainDrawer.listItems.${page.route}`)} />
      </Router>
    </ListItem>
  ));

export default function MenuContent() {
  const { pageSelected, setPageSelected } = usePageSelectedContext();
  const { isAdmin } = useAuthContext();
  const navigate = useNavigate();

  const navigateToPage = (route: string) => navigate(`/dash/${route}`);
  React.useEffect(() => {
    if (pageSelected === homePage.route) navigateToPage(homePage.route);
  }, [pageSelected, navigate]);

  const handleSelectPage = (page: PageType) => {
    if (page.route !== pageSelected) setPageSelected(page.route);
  };

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
        <Typography variant="h6" sx={{ mt: 0, mb: 1.5 }}>
          {i18n.t('mainDrawer.listItems.main')}
        </Typography>
        {renderPages(mainListPages, pageSelected, handleSelectPage)}

        {isAdmin && (
          <>
            <Typography variant="h6" sx={{ mb: 0, mt: 1.5 }}>
              {i18n.t('mainDrawer.listItems.administration')}
            </Typography>
            {renderPages(adminListPages, pageSelected, handleSelectPage)}
          </>
        )}
      </List>

      {/* Weather component */}
      <Weather sx={{ mb: 2 }} />

      {/* Secondary list: Settings, About, Feedback */}
      <List dense>{renderPages(secondaryListPages, pageSelected, handleSelectPage)}</List>
    </Stack>
  );
}
