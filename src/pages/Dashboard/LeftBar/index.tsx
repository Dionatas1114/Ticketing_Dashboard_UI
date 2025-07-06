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

import Router from '../../../components/router';
import Weather from '../../../components/weather';

import { useAuthContext } from '../../../context/AuthContext';
import { usePageSelectedContext } from '../../../context/PageSelectedContext';

import { i18n } from '../../../translate/i18n';

type PageType = {
  text: string;
  route: string;
  icon: React.JSX.Element;
};

const mainListPages: PageType[] = [
  { text: 'Home', route: 'home', icon: <HomeRoundedIcon /> },
  { text: 'Tickets', route: 'tickets', icon: <WhatsAppIcon /> },
  { text: 'Contacts', route: 'contacts', icon: <ContactPageIcon /> },
];

const adminListPages: PageType[] = [
  { text: 'Quick Answers', route: 'quick-answers', icon: <AssignmentIcon /> },
  { text: 'Users', route: 'users', icon: <PeopleRoundedIcon /> },
  { text: 'Connections', route: 'connections', icon: <ConnectionIcon /> },
  { text: 'Queues', route: 'queues', icon: <QueueIcon /> },
];

const secondaryListPages: PageType[] = [
  { text: 'Settings', route: 'settings', icon: <SettingsRoundedIcon /> },
  // { text: 'About', icon: <InfoRoundedIcon /> },
  // { text: 'Feedback', icon: <HelpRoundedIcon /> },
];

const homePage = mainListPages[0];

export default function MenuContent() {
  const { pageSelected, setPageSelected } = usePageSelectedContext();
  const { isAdmin } = useAuthContext();

  const navigate = useNavigate();
  const navigateToPage = (route: string) => navigate(`/dash/${route}`);

  const mainPages = React.useMemo(() => mainListPages, []);
  const adminPages = React.useMemo(() => adminListPages, []);
  const secondaryPages = React.useMemo(() => secondaryListPages, []);

  React.useEffect(() => {
    if (pageSelected === homePage.text) navigateToPage(homePage.route);
  }, [pageSelected, navigate]);

  const handleSelectPage = (page: PageType) => {
    if (page.text !== pageSelected) setPageSelected(page.text);
  };

  const renderPages = (pages: PageType[]) =>
    pages.map((page) => (
      <ListItem key={page.route} disablePadding sx={{ display: 'block' }}>
        <Router
          to={page.route}
          selected={page.text === pageSelected}
          onClick={() => handleSelectPage(page)}
        >
          <ListItemIcon>{page.icon}</ListItemIcon>
          <ListItemText primary={page.text} />
        </Router>
      </ListItem>
    ));

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
        <Typography variant="h6" sx={{ mt: 0, mb: 1.5 }}>
          {i18n.t('mainDrawer.listItems.main')}
        </Typography>
        {renderPages(mainPages)}

        {isAdmin && (
          <>
            <Typography variant="h6" sx={{ mb: 0, mt: 1.5 }}>
              {i18n.t('mainDrawer.listItems.administration')}
            </Typography>
            {renderPages(adminPages)}
          </>
        )}
      </List>

      {/* Weather component */}
      <Weather sx={{ mb: 2 }} />

      {/* Secondary list: Settings, About, Feedback */}
      <List dense>{renderPages(secondaryPages)}</List>
    </Stack>
  );
}
