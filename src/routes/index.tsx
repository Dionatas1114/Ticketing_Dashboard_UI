import { Routes, Route } from 'react-router-dom';

import Main from '../layout/main';
// import Dashboard from '../pages/dashboard';
import SignIn from '../pages/auth/SignIn';
import SignUp from '../pages/auth/SignUp';

const AppRoutes = () => (
  <Routes>
    <Route path="/*" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
    {/* <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/change-password" element={<ChangePassword />} /> */}
    <Route path="dash" element={<Main />}>
      <Route path="" element={<Main />} />
      {/* <Route path="tickets" element={<Tickets />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="quickAnswers" element={<QuickAnswers />} />
        <Route path="users" element={<Users />} />
        <Route path="connections" element={<Connections />} />
        <Route path="queues" element={<Queues />} /> */}
    </Route>
  </Routes>
);

export default AppRoutes;
