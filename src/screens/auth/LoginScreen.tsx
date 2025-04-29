import { View, Text, Button } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ButtonComponent } from '../../components'
import { appColors } from '../../constants/appColor'
import { globalStyles } from '../../styles/globalStyles'

const LoginScreen = () => {
  return (
    <View style={[globalStyles.container, {}]}>
      {/* <Text>LoginScreen</Text>
      <Button title='Login' onPress={async () => await AsyncStorage.setItem('assetToken', 'loginSuccess')} /> */}
      <ButtonComponent text='Login' icon={<View><Text></Text></View>} type='primary'/>
    </View>
  )
}

export default LoginScreen