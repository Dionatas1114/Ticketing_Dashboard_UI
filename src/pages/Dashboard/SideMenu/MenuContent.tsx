import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from '@mui/material';
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

import RouterLink from '../../../components/Link';

import ItemSelectedContext from '../../../context/ItemSelectedContext';

interface RouteType {
  text: string;
  route: string;
  icon: React.JSX.Element;
}

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

  const context = React.useContext(ItemSelectedContext);

  if (!context) throw new Error('Error with ItemSelectedProvider');

  const { itemSelected, setItemSelected } = context;

  const navigateToRoute = (route: string) => {
    navigate(`/dash/${route}`);
  };

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
        <RouterLink to={item.route}>
          <ListItemButton
            selected={item.text === itemSelected}
            onClick={() => handleItemClick(item)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        </RouterLink>
      </ListItem>
    ));
  };

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>{renderListItems(memoMainListItems)}</List>
      <List dense>{renderListItems(memoSecondaryListItems)}</List>
    </Stack>
  );
}
