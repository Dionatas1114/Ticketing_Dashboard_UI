import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';

interface RouterLinkProps {
  to: string;
}

const RouterLinkComponent = ({ children, to }: RouterLinkProps & ChildrenProps) => (
  <Link
    id="router link"
    to={to}
    component={RouterLink}
    variant="body2"
    sx={{ alignSelf: 'center' }}
  >
    {children}
  </Link>
);

export default RouterLinkComponent;
