import { Routes, Route } from 'react-router-dom';

// Auth pages
import SignIn from '../pages/auth/SignIn';
import SignUp from '../pages/auth/SignUp';

// Dashboard pages
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Dashboard/Contents/home';
import Tickets from '../pages/Dashboard/Contents/tickets';
import Contacts from '../pages/Dashboard/Contents/contacts';
import QuickAnswers from '../pages/Dashboard/Contents/quickAnswers';
import Users from '../pages/Dashboard/Contents/users';
import Connections from '../pages/Dashboard/Contents/connections';
import Queues from '../pages/Dashboard/Contents/queues';
import Settings from '../pages/Dashboard/Contents/Settings';

import { AuthProvider } from '../context/AuthContext';

const AppRoutes = () => (
  <AuthProvider>
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
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  </AuthProvider>
);

export default AppRoutes;
