import React, {FunctionComponent} from 'react';

import appStyles from './app.module.css';

const App: FunctionComponent = () => {
  return (
    <div className={appStyles.app}>
      <div className={appStyles['app__background-main']}>
        <div className={appStyles['app__background-bottom']}/>
        <div className={appStyles['app__background-circle']}/>
        <main className={appStyles.main}>
          {/*<h1>blablablalbla blablablalbla blablablalbla blablablalbla blablablalbla blablablalbla blablablalbla bla*/}
          {/*  bla bla lbla*/}
          {/*</h1>*/}
        </main>
      </div>
    </div>
  )
}

export default App;