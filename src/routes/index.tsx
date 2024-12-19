import { Routes, Route } from 'react-router-dom';

// Auth pages
import SignIn from '../pages/auth/SignIn';
import SignUp from '../pages/auth/SignUp';

// Dashboard pages
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Dashboard/LeftBar/home';
import Tickets from '../pages/Dashboard/LeftBar/tickets';
import Contacts from '../pages/Dashboard/LeftBar/contacts';
import QuickAnswers from '../pages/Dashboard/LeftBar/quickAnswers';
import Users from '../pages/Dashboard/LeftBar/users';
import Connections from '../pages/Dashboard/LeftBar/connections';
import Queues from '../pages/Dashboard/LeftBar/queues';

const AppRoutes = () => (
  <Routes>
    <Route path="/*" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
    {/* <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/change-password" element={<ChangePassword />} /> */}
    <Route path="dash" element={<Dashboard />}>
      <Route path="home" element={<Home />} />
      <Route path="tickets" element={<Tickets />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="quick-answers" element={<QuickAnswers />} />
      <Route path="users" element={<Users />} />
      <Route path="connections" element={<Connections />} />
      <Route path="queues" element={<Queues />} />
      <Route path="settings" element={<div>settings</div>} />
    </Route>
  </Routes>
);

export default AppRoutes;
