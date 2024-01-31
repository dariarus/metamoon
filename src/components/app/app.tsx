import React, {FunctionComponent} from 'react';

import appStyles from './app.module.css';

import {Header} from '../header/header';
import {MainPage} from '../../pages/main-page/main-page';
import {SocialNetworksWidget} from '../social-networks-widget/social-networks-widget';

const App: FunctionComponent = () => {
  return (
    // TODO: при настройке роутинга проверять страницу, и на главной делать один фон, на остальных - другой
    <div className={appStyles.app}>
      <Header/>

      {/*TODO: при настройке роутинга проверять страницу и удалить фон, если не главная*/}
      <div className={appStyles['app__background-bottom']}/>
      <div className={appStyles['app__background-circle']}/>

      <main className={appStyles.main}>
        <MainPage/>
      </main>
      <SocialNetworksWidget/>
    </div>
  )
}

export default App;