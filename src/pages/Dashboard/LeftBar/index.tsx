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

import ItemSelectedContext from '../../../context/MenuItemSelectedContext';

import { i18n } from '../../../translate/i18n';

type RouteType = {
  text: string;
  route: string;
  icon: React.JSX.Element;
};

const mainListItems: RouteType[] = [
  { text: 'Home', route: 'home', icon: <HomeRoundedIcon /> },
  { text: 'Tickets', route: 'tickets', icon: <WhatsAppIcon /> },
  { text: 'Contacts', route: 'contacts', icon: <ContactPageIcon /> },
  { text: 'Quick Answers', route: 'quick-answers', icon: <AssignmentIcon /> },
  // if user is admin
  { text: 'Users', route: 'users', icon: <PeopleRoundedIcon /> },
  { text: 'Connections', route: 'connections', icon: <ConnectionIcon /> },
  { text: 'Queues', route: 'queues', icon: <QueueIcon /> },
];

const secondaryListItems: RouteType[] = [
  { text: 'Settings', route: 'settings', icon: <SettingsRoundedIcon /> },
  // { text: 'About', icon: <InfoRoundedIcon /> },
  // { text: 'Feedback', icon: <HelpRoundedIcon /> },
];

const homePage = mainListItems[0];

export default function MenuContent() {
  const navigate = useNavigate();

  const memoMainListItems = React.useMemo(() => mainListItems, []);
  const memoSecondaryListItems = React.useMemo(() => secondaryListItems, []);

  const firstMainListItems = memoMainListItems.slice(0, 3); // Until "Contacts"
  const secondMainListItems = memoMainListItems.slice(3); // From "Quick Answers" onwards

  const context = React.useContext(ItemSelectedContext);
  if (!context) throw new Error('Error with ItemSelectedProvider');
  const { itemSelected, setItemSelected } = context;

  const navigateToRoute = (route: string) => navigate(`/dash/${route}`);

  React.useEffect(() => {
    if (itemSelected === homePage.text) {
      navigateToRoute(homePage.route);
    }
  }, [itemSelected, navigate]);

  const handleItemClick = ({ text, route }: RouteType) => {
    if (text !== itemSelected) {
      setItemSelected(text);
      setTimeout(() => navigateToRoute(route), 0);
    }
  };

  const renderListItems = (items: RouteType[]) => {
    return items.map((item) => (
      <ListItem key={item.route} disablePadding sx={{ display: 'block' }}>
        <Router
          to={item.route}
          selected={item.text === itemSelected}
          onClick={() => handleItemClick(item)}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </Router>
      </ListItem>
    ));
  };

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
        <Typography variant="h6" sx={{ mt: 0, mb: 1.5 }}>
          {i18n.t('mainDrawer.listItems.main')}
        </Typography>
        {renderListItems(firstMainListItems)}
        <Typography variant="h6" sx={{ mb: 0, mt: 1.5 }}>
          {i18n.t('mainDrawer.listItems.administration')}
        </Typography>
        {renderListItems(secondMainListItems)} {/* //TODO: Render only if user is admin */}
      </List>

      {/* Weather component */}
      <Weather sx={{ mb: 2 }} />

      {/* Secondary list: Settings, About, Feedback */}
      <List dense>{renderListItems(memoSecondaryListItems)}</List>
    </Stack>
  );
}
