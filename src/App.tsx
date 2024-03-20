import React, { type FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { UserFeaturesLayout } from 'layouts';

import { PrivatePresaleProfile } from './pages/PrivatePresaleProfile/PrivatePresaleProfile';
// import { AirdropProfile } from "./pages/AirdropProfile/AirdropProfile";
// import { MainPage } from "./pages/MainPage/MainPage";

const App: FC = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<MainPage />} /> */}
      <Route
        path="/"
        element={
          <UserFeaturesLayout>
            <PrivatePresaleProfile privateSalesStatus="soon" />
          </UserFeaturesLayout>
        }
      />
    </Routes>
  );
};

export default App;
