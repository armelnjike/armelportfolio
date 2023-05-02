import React from 'react'
import { NavigationDot, SocialMedia } from '../Components'

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id = { idName } className = {`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
            <Component />
            <div className = "copyright">
                <p className='p-text'>@2021 Armel Njike</p>
                <p className='p-text'>All right reserved</p>
            </div>
        </div>
        <NavigationDot active = { idName } />
    </div>
  )
}

export default AppWrap