import { colors } from "@/themes";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

/**
 * @param {Object} props
 * @param {React.ReactNode} [props.children]
 * @param {import('react-native').StyleProp<import('react-native').ViewStyle>} [props.customStyle]
 */
export default function BackgroundView({ children, customStyle }) {
    return (
        <LinearGradient
            style={[styles.container, customStyle]}
            colors={colors.backgroundGradient}>
            {children}
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
