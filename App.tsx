import React, { useEffect, useState } from 'react';
import { SplashScreen } from './src/screens';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigators/AuthNavigator';
import { StatusBar } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import MainNavigator from './src/navigators/MainNavigator';

const App = () => {

  const [isShowSplash, setIsShowSplash] = useState(true)
  const [accessToken, setAccessToken] = useState('')

  const { getItem, setItem } = useAsyncStorage('assetToken')

  useEffect(() => {
    const timout = setTimeout(() => {
      setIsShowSplash(false)
    }, 1500)

    return () => clearTimeout(timout)
  }, [])

  useEffect(() => {
    checkLogin()
  }, [])

  const checkLogin = async () => {
    const token = await getItem()

    // Nếu có token thì setAccessToken bằng token nhận được
    token && setAccessToken(token)
  }

  return (
    <>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />
      {isShowSplash ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          {
            // Nếu có accessToken thì return về Main(Màn Home). Còn không thì về Auth(Màn đăng nhập)
            accessToken ? <MainNavigator /> : <AuthNavigator />
          }
        </NavigationContainer>
      )}
    </>
  )
}

export default App;


