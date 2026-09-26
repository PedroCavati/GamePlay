import { Image, StyleSheet } from "react-native";

/**
 * @param {Object} props
 * @param {import("react-native").ImageSourcePropType} props.source
 */
export default function Avatar({ source, customStyle }) {
    return (
        <Image
            style={[styles.image, customStyle]}
            source={source}
        />
    )
}

const styles = StyleSheet.create({
    image: {
        height: 46,
        width: 46,
        borderRadius: 8
    }
})