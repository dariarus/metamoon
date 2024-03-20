import React, { type FC } from "react";
import { Route, Routes } from "react-router-dom";

import { UserFeaturesLayout } from "layouts";
import { PrivatePresalePage } from "pages";
// import { AirdropPage } from "./pages/AirdropPage/AirdropPage";
// import { MainPage } from "./pages/MainPage/MainPage";

const App: FC = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<MainPage />} /> */}
      <Route
        path="/"
        element={
          <UserFeaturesLayout>
            <PrivatePresalePage privateSalesStatus="soon" />
          </UserFeaturesLayout>
        }
      />
    </Routes>
  );
};

export default App;
