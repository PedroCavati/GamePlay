import { colors, typography } from "@/themes";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

/**
 * @param {Object} props
 * @param {() => void} props.onPress
 * @param {string} [props.title]
 * @param {React.ReactNode} [props.icon]
 */
export default function ActionButton({ onPress, icon, title }) {
    if (!title && !icon) return null;

    const isIconOnly = Boolean(icon && !title);
    const isTextOnly = Boolean(title && !icon);
    const hasBoth = Boolean(icon && title);

    return (
        <TouchableOpacity
            style={[styles.button, isIconOnly && styles.iconOnlyButton]}
            onPress={onPress}
        >

            {icon && (
                <View style={isIconOnly ? styles.centeredIconContainer : styles.iconContainer}>
                    {icon}
                </View>
            )}

            {hasBoth && (
                <View style={styles.divider} />
            )}

            {title && (
                <View style={[styles.textContainer]}>
                    <Text style={styles.text}>
                        {title}
                    </Text>
                </View>
            )}

        </TouchableOpacity>
    )


}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        height: 56,
        backgroundColor: colors.buttonRed,
        maxWidth: '73%',
        maxWidth: 274
    },
    iconOnlyButton: {
        width: 48,
        height: 48,
        justifyContent: 'center'
    },
    iconContainer: {
        width: 56,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    centeredIconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    divider: {
        width: 1,
        height: '100%',
        backgroundColor: colors.dividerRed,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        ...typography.buttonTitle,
        color: colors.textWhite
    },
})