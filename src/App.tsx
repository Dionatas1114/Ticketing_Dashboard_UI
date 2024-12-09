import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { CssBaseline } from '@mui/material';

import Routes from './routes';

const App = () => (
  <Router>
    <ToastContainer autoClose={2000} />
    <CssBaseline enableColorScheme />
    <Routes />
  </Router>
);

export default App;
