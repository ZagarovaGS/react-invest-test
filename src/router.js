import React from 'react';
import { Route, Routes } from 'react-router';
import Form from './componens/form';
import Layout from './componens/layout';
import Wellcome from './componens/welcome';
import FormPage from './pages/form-page';
import WelcomePage from './pages/welcome-page';

export const RouterMap = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route index element={<WelcomePage />} />
      </Route>
      <Route path={'/info'} element={<Layout />}>
        <Route index element={<FormPage />} />
      </Route>
    </Routes>
  );
};
