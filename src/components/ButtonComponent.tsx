import { StyleProp, ViewStyle, TextStyle, TouchableOpacity } from 'react-native'
import React, { ReactNode } from 'react'
import TextComponent from './TextComponent'
import { globalStyles } from '../styles/globalStyles'
import { appColors } from '../constants/appColor'
import { fontFamilies } from '../constants/fontFamilies'

interface Props {
    icon?: ReactNode,
    text: string,
    type?: 'primary' | 'text' | 'link',
    color?: string,
    styles?: StyleProp<ViewStyle>,
    textColor?: string,
    textStyles?: StyleProp<TextStyle>,
    textFont?: string
    onPress?: () => void,
    iconFlex?: 'right' | 'left'
}

const ButtonComponent = (props: Props) => {

    const { icon, text, type, color, styles, textColor, textStyles, textFont, onPress, iconFlex } = props

    return (
        type === 'primary' ? (

            <TouchableOpacity
                onPress={onPress}
                style={[
                    globalStyles.button,
                    globalStyles.shadow,
                    {
                        backgroundColor: color ?? appColors.primary, marginBottom: 17, width: '80%'
                    }, styles
                ]}>
                {icon && icon}
                <TextComponent
                    text={text}
                    color={textColor ?? appColors.white}
                    styles={[textStyles, { marginLeft: icon && iconFlex === 'left' ? 12 : 0, fontSize: 16 }]}
                    flex={icon && iconFlex === 'right' ? 1 : 0}
                    font={textFont ?? fontFamilies.medium}
                />
                {icon && iconFlex === 'right' && icon}
            </TouchableOpacity>
        ) : (
            <TouchableOpacity onPress={onPress}>
                <TextComponent
                    text={text}
                    color={type === 'link' ? appColors.primary : appColors.text}
                />
            </TouchableOpacity>
        )
    )
}

export default ButtonComponent