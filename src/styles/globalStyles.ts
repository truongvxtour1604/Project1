import { StyleSheet } from "react-native";
import { appColors } from "../constants/appColor";
import { fontFamilies } from "../constants/fontFamilies";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.white,
    },
    text: {
        fontFamily: fontFamilies.regular,
        fontSize: 16,
        color: appColors.text
    }
})