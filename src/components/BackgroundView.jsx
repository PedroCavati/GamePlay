import { colors } from "@/themes";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";

/**
 * 
 * @param {StyleProp<ViewStyle>} customStyle - use a custom style configuration
 * @returns 
 */
export default function BackgroundView({ children, customStyle }) {
    return (
        <View
            style={styles.container}
        >
            <LinearGradient style={[styles.gradient, customStyle]} colors={colors.backgroundGradient}>
                {children}
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gradient: {
        flex: 1,
    }
})
