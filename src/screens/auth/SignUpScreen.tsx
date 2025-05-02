import React, { useState } from 'react'
import { ButtonComponent, ContainerComponent, InputComponent, RowComponent, SectionComponent, SpaceComponent, TextComponent } from '../../components'
import { appColors } from '../../constants/appColor'
import { Lock, Sms } from 'iconsax-react-native'
import { fontFamilies } from '../../constants/fontFamilies'
import SocialLogin from './components/SocialLogin'

const initValue = {
  usename: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpScreen = ({ navigation }: any) => {

  const [values, setValues] = useState(initValue)

  const handleChangeValue = (key: string, value: string) => {
    const data: any = { ...values }
    data[`${key}`] = value
    setValues(data)
  }

  return (
    <ContainerComponent isImageBackground isScroll back>
      <SectionComponent>
        <TextComponent size={24} font={fontFamilies.semiBold} text='Sign up' />

        <SpaceComponent height={21} />

        <InputComponent
          value={values.usename} onChange={val => handleChangeValue('usename', val)}
          placeholder='Username'
          allowClear
          affix={<Sms size={22} color={appColors.gray} />}
        />
        <InputComponent
          value={values.email} onChange={val => handleChangeValue('email', val)}
          placeholder='Email'
          allowClear
          affix={<Sms size={22} color={appColors.gray} />}
        />
        <InputComponent
          value={values.password} onChange={val => handleChangeValue('password', val)}
          placeholder='Password'
          isPassword
          allowClear
          affix={<Lock size={22} color={appColors.gray} />}
        />
        <InputComponent
          value={values.confirmPassword} onChange={val => handleChangeValue('confirmPassword', val)}
          placeholder='Confirm password'
          isPassword
          allowClear
          affix={<Lock size={22} color={appColors.gray} />}
        />

      </SectionComponent>

      <SpaceComponent height={16} />

      <SectionComponent styles={[{alignItems: 'center'}]}>
        <ButtonComponent text='SIGN UP' type='primary' icon />
      </SectionComponent>

      <SocialLogin />

      <SectionComponent>
        <RowComponent justify='center'>
          <TextComponent text="Already have an account? " />
          <ButtonComponent type='link' text='Sign in' onPress={() => navigation.navigate('LoginScreen')} />
        </RowComponent>
      </SectionComponent>

    </ContainerComponent>
  )
}

export default SignUpScreen