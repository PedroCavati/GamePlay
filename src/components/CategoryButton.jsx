import { colors, typography } from "@/themes";
import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

/**
 * @param {Object} props - Component properties.
 * @param {import("react-native").ImageSourcePropType} props.source 
 * @param {string} props.title
 * @param {() => void} [props.onPress]
 * @param {boolean} [props.isSelected=false]
 */
export default function CategoryButton({ source, title, onPress, isSelected = false }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            style={[
                styles.touchableWrapper,
                !isSelected && styles.unselectedOpacity,
            ]}
        >
            <LinearGradient
                colors={colors.categoryButtonBorderGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradientBorder}
            >
                <View style={styles.cardContent}>
                    <View style={styles.iconWrapper}>
                        <Image source={source} style={styles.icon} resizeMode="contain" />
                    </View>

                    <Text style={styles.title}>{title}</Text>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    touchableWrapper: {
        borderRadius: 8,
    },

    unselectedOpacity: {
        opacity: 0.5,
    },

    gradientBorder: {
        padding: 1.5,
        borderRadius: 8,
        width: 104,
        height: 120,
    },

    cardContent: {
        flex: 1,
        backgroundColor: colors.categoryButtonBlue,
        borderRadius: 7,
        justifyContent: "center",
        alignItems: "center",
    },

    iconWrapper: {
        marginBottom: 20,
        alignItems: "center",
        justifyContent: "center",
    },

    icon: {
        width: 48,
        height: 48,
    },

    title: {
        ...typography.categoryTitle,
        color: colors.textWhite,
        textAlign: "center",
    },
})