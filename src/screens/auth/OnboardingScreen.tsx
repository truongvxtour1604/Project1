import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../../styles/globalStyles'
import Swiper from 'react-native-swiper'
import { appInfo } from '../../constants/appInfos'
import { appColors } from '../../constants/appColor'
import { TextComponent } from '../../components'
import { fontFamilies } from '../../constants/fontFamilies'

const OnboardingScreen = ({ navigation }: any) => {

    const [index, setIndex] = useState(0)

    return (
        <View style={[globalStyles.container]}>
            {/* showsButtons: nút điều hướng, chuyển qua lại các ảnh */}
            {/* loop={false}: không bị vòng lặp vô tận khi vuốt đến cuối ảnh */}
            <Swiper
                style={[{}]}
                loop={false}
                onIndexChanged={num => setIndex(num)}
                index={index}
                activeDotColor={appColors.white}
            >
                <Image source={require('../../assets/images/onboarding-1.png')}
                    style={[{
                        flex: 1,
                        width: appInfo.sizes.WIDTH,
                        height: appInfo.sizes.HEIGHT,
                        resizeMode: 'contain'
                    }]}
                />
                <Image source={require('../../assets/images/onboarding-2.png')}
                    style={[{
                        flex: 1,
                        width: appInfo.sizes.WIDTH,
                        height: appInfo.sizes.HEIGHT,
                        resizeMode: 'contain'
                    }]}
                />
                <Image source={require('../../assets/images/onboarding-3.png')}
                    style={[{
                        flex: 1,
                        width: appInfo.sizes.WIDTH,
                        height: appInfo.sizes.HEIGHT,
                        resizeMode: 'contain'
                    }]}
                />
            </Swiper>
            <View style={[{
                paddingHorizontal: 16,
                paddingVertical: 20,
                position: 'absolute',
                bottom: 0,
                right: 0,
                left: 0,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }]}>
                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                    <TextComponent text='Skip' color={appColors.gray2} font={fontFamilies.medium} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => index < 2 ? setIndex(index + 1) : navigation.navigate('LoginScreen')}>
                    <TextComponent text='Next' color={appColors.white} font={fontFamilies.medium} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OnboardingScreen