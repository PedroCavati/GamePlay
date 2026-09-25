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
            style={[styles.container, customStyle]}
        >
            <LinearGradient style={styles.gradient} colors={["#0E1647", "#0A1033"]}>
                {children}
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0E1647',
    },
    gradient: {
        flex: 1,
    }
})
