import { ListItemButton, ListItemButtonProps } from '@mui/material';
import { LinkProps, Link as RouterLink } from 'react-router-dom';

const RouterComponent = (props: LinkProps & ListItemButtonProps) => (
  <ListItemButton id="router redirect" component={RouterLink} {...props}>
    {props.children}
  </ListItemButton>
);

export default RouterComponent;
