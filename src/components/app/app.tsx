import React, {FunctionComponent} from 'react';

import appStyles from './app.module.css';
import {Header} from '../header/header';

const App: FunctionComponent = () => {
  return (
    // TODO: при настройке роутинга проверять страницу, и на главной делать один фон, на остальных - другой
    <div className={appStyles.app}>

      {/*<div className={appStyles['app__background-main-page']}>*/}
        <Header/>

       {/*TODO: при настройке роутинга проверять страницу и удалить фон, если не главная*/}
        <div className={appStyles['app__background-bottom']}/>
        <div className={appStyles['app__background-circle']}/>

        <main className={appStyles.main}>
          {/*<Header/>*/}
          <h1>blablablalbla blablablalbla blablablalbla blablablalbla blablablalbla blablablalbla blablablalbla bla
            bla bla lbla
          </h1>
        </main>

      {/*</div>*/}
    </div>
  )
}

export default App;