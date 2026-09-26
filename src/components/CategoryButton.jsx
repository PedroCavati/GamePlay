import { colors, typography } from "@/themes";
import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

/**
 * @param {Object} props
 * @param {import("react-native").ImageSourcePropType} props.source
 * @param {string} props.title
 * @param {() => void} props.onPress
 */
export default function CategoryButton({ source, title, onPress }) {
    return (
        <LinearGradient
            colors={colors.categoryButtonBorderGragient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradientBorder}
        >

            <TouchableOpacity
                style={styles.cardContent}
                onPress={onPress}
            >

                <View style={styles.iconWrapper}>
                    <Image source={source} />
                </View>

                <Text style={styles.title}>{title}</Text>

            </TouchableOpacity>

        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    gradientBorder: {
        padding: 1.5,
        borderRadius: 8,
        width: 104,
        height: 120,
    },
    cardContent: {
        flex: 1,
        backgroundColor: colors.categoryButtonBlue,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconWrapper: {
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        ...typography.categoryTitle,
        color: colors.textWhite,
        textAlign: 'center',
    },
})