import React, {FunctionComponent} from 'react';
import {Route, Routes} from 'react-router-dom';

import appStyles from './app.module.css';

import {Header} from '../header/header';

// import {MainPage} from '../../pages/main-page/main-page';
import {SocialNetworksWidget} from '../social-networks-widget/social-networks-widget';
import {UserFeatures} from '../../pages/UserFeatures/UserFeatures';
// import {AirdropProfile} from '../AirdropProfile/AirdropProfile';
import {ScrollingText} from '../ScrollingText/ScrollingText';
import {PrivatePresaleProfile} from '../PrivatePresaleProfile/PrivatePresaleProfile';


// import rocket from '../../images/rocket.png';

const App: FunctionComponent = () => {
  return (
    // TODO: при настройке роутинга проверять страницу, и на главной делать один фон, на остальных - другой
    // <div className={`${appStyles.app} ${appStyles['app_background_main-page']}`}>
    <div className={`${appStyles.app} ${appStyles['app_background_basic']}`}>
      <div className={appStyles.app__content}>
        <Header/>
        <main className={appStyles.main}>
          <Routes>
            {/*<Route path="/" element={<MainPage/>}/>*/}
            {/*<Route path="/airdrop" element={<AirdropPage/>}/>*/}
            {/*<Route path="/" element={*/}
            {/*  <UserFeatures>*/}
            {/*    <AirdropProfile isUserActive={true}/>*/}
            {/*  </UserFeatures>*/}
            {/*}/>*/}
            <Route path="/" element={
              <UserFeatures>
                <PrivatePresaleProfile privateSalesStatus="available"/>
              </UserFeatures>
            }/>
          </Routes>
        </main>
        <SocialNetworksWidget/>
      </div>
      <ScrollingText/>
    </div>
  )
}

export default App;