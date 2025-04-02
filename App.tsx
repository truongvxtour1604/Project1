import React, { useEffect, useState } from 'react';
import { SplashScreen } from './src/screens';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigators/AuthNavigator';

const App = () => {

  const [isShowSplash, setIsShowSplash] = useState(true)

  useEffect(() => {
    const timout = setTimeout(() => {
      setIsShowSplash(false)
    }, 1500)

    return () => clearTimeout(timout)
  }, [])

  return (
    isShowSplash ? <SplashScreen /> : <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  )
}

export default App;


