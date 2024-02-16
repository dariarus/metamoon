import React, { type FC } from 'react'

import styles from './app.module.css'

import { Header } from '../components/header/header'
import { MainPage } from '../pages/main-page/main-page'
import { SocialNetworksWidget } from '../components/social-networks-widget/social-networks-widget'

const App: FC = () => {
  return (
    // TODO: при настройке роутинга проверять страницу, и на главной делать один фон, на остальных - другой
    <div className={styles.app}>
      <div className={styles.app__content}>
        <Header/>

        {/* TODO: при настройке роутинга проверять страницу и удалить фон, если не главная */}
        <div className={styles['app__background-bottom']}>
          <div className={styles['app__background-circle']}>
            {/* <div className={styles.app__rocket}> */}
            {/*  <img src={rocket} style={{width: "100%"}}/> */}
            {/* </div> */}
          </div>
        </div>

        <main className={styles.main}>
          <MainPage/>
        </main>
        <SocialNetworksWidget/>
      </div>
    </div>
  )
}

export default App
