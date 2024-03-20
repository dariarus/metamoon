import React, { type FC } from "react";
import { Route, Routes } from "react-router-dom";

import { UserFeaturesLayout } from "layouts";
import { AirdropPage, MainPage, PrivatePresalePage } from "pages";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route
        path="airdrop"
        element={
          <UserFeaturesLayout>
            <AirdropPage isUserActive={false} />
          </UserFeaturesLayout>
        }
      />
      <Route
        path="private-presale"
        element={
          <UserFeaturesLayout>
            <PrivatePresalePage privateSalesStatus="available" />
          </UserFeaturesLayout>
        }
      />
    </Routes>
  );
};

export default App;
