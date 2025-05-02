import { Image, Switch } from 'react-native'
import React, { useState } from 'react'
import { ButtonComponent, ContainerComponent, InputComponent, RowComponent, SectionComponent, SpaceComponent, TextComponent } from '../../components'
import { appColors } from '../../constants/appColor'
import { Lock, Sms } from 'iconsax-react-native'
import { fontFamilies } from '../../constants/fontFamilies'
import SocialLogin from './components/SocialLogin'

const LoginScreen = ({ navigation }: any) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isRemember, setIsRemember] = useState(true)

  return (
    <ContainerComponent isImageBackground isScroll>
      <SectionComponent styles={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('../../assets/images/text-logo.png')}
          style={[{
            width: 162,
            height: 114,
            marginTop: 75
          }]}
        />
      </SectionComponent>

      <SectionComponent>
        <TextComponent size={24} font={fontFamilies.semiBold} text='Sign in' />
        <SpaceComponent height={21} />
        <InputComponent
          value={email} onChange={val => setEmail(val)}
          placeholder='Email'
          allowClear
          affix={<Sms size={22} color={appColors.gray} />}
        />

        <InputComponent
          value={password} onChange={val => setPassword(val)}
          placeholder='Password'
          isPassword
          allowClear
          affix={<Lock size={22} color={appColors.gray} />}
        />
        <RowComponent justify='space-between'>
          <RowComponent onPress={() => setIsRemember(!isRemember)}>
            <Switch
              trackColor={{ true: appColors.primary }}
              thumbColor={appColors.white}
              value={isRemember}
              onChange={() => setIsRemember(!isRemember)}
            />
            <TextComponent text='Remember me' />
          </RowComponent>
          <ButtonComponent
            text='Forgot password'
            onPress={() => { }}
            type='text'
          />
        </RowComponent>
      </SectionComponent>

      <SpaceComponent height={16} />

      <SectionComponent styles={[{alignItems: 'center'}]}>
        <ButtonComponent text='SIGN IN' type='primary' icon />
      </SectionComponent>

      <SocialLogin />

      <SectionComponent>
        <RowComponent justify='center'>
          <TextComponent text="Don't have an account? " />
          <ButtonComponent
            type='link'
            text='Sign up'
            onPress={() => {
              console.log('Navigating to SignUpScreen')
              navigation.navigate('SignUpScreen')
            }}
          />  

        </RowComponent>
      </SectionComponent>

    </ContainerComponent>
  )
}

export default LoginScreen