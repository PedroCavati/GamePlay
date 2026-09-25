import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
            <SafeAreaView>
                {children}
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0E1647',
    },
})
