import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import AppRoutes from './routes';

const App = () => (
  <Router>
    <ToastContainer autoClose={2000} />
    <AppRoutes />
  </Router>
);

export default App;
