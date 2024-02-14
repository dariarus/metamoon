import React, { type FunctionComponent } from 'react'

import appStyles from './app.module.css'

import { Header } from '../header/header'
import { MainPage } from '../../pages/main-page/main-page'
import { SocialNetworksWidget } from '../social-networks-widget/social-networks-widget'

// import rocket from '../../images/rocket.png';

const App: FunctionComponent = () => {
  return (
    // TODO: при настройке роутинга проверять страницу, и на главной делать один фон, на остальных - другой
    <div className={appStyles.app}>
      <div className={appStyles.app__content}>
        <Header/>

        {/* TODO: при настройке роутинга проверять страницу и удалить фон, если не главная */}
        <div className={appStyles['app__background-bottom']}>
          <div className={appStyles['app__background-circle']}>
            {/* <div className={appStyles.app__rocket}> */}
            {/*  <img src={rocket} style={{width: "100%"}}/> */}
            {/* </div> */}
          </div>
        </div>

        <main className={appStyles.main}>
          <MainPage/>
        </main>
        <SocialNetworksWidget/>
      </div>
    </div>
  )
}

export default App
