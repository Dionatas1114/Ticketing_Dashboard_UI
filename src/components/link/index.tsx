import { Link } from '@mui/material';
import { LinkProps, Link as RouterLink } from 'react-router-dom';

const RouterLinkComponent = (props: LinkProps) => (
  <Link id="router link" component={RouterLink} sx={{ alignSelf: 'center' }} {...props}>
    {props.children}
  </Link>
);

export default RouterLinkComponent;
