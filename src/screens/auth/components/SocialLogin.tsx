import React from 'react'
import { ButtonComponent, SectionComponent, SpaceComponent, TextComponent } from '../../../components'
import { appColors } from '../../../constants/appColor'
import { fontFamilies } from '../../../constants/fontFamilies'
import { Facebook, Google } from '../../../assets/svgs'

const SocialLogin = () => {
    return (
        <SectionComponent styles={[{alignItems: 'center'}]}>
            <TextComponent
                text='OR'
                color={appColors.gray4}
                size={16}
                font={fontFamilies.medium}
                styles={[{ textAlign: 'center' }]}
            />
            <SpaceComponent height={16} />
            <ButtonComponent
                text='Login with Google'
                color={appColors.white}
                textColor={appColors.text}
                textFont={fontFamilies.regular}
                type='primary'
                icon={<Google />}
                iconFlex='left'
            />
            <ButtonComponent
                text='Login with Facebook'
                color={appColors.white}
                textColor={appColors.text}
                textFont={fontFamilies.regular}
                type='primary'
                icon={<Facebook />}
                iconFlex='left'
            />
        </SectionComponent>
    )
}

export default SocialLogin