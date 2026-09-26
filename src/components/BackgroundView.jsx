import { colors } from "@/themes";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 */
export default function BackgroundView({ children }) {
    return (
        <View
            style={styles.container}
        >
            <LinearGradient style={[styles.gradient]} colors={colors.backgroundGradient}>
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
