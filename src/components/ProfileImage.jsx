import { Image, StyleSheet } from "react-native";

/**
 * @param {Object} props
 * @param {import("react-native").ImageSourcePropType} props.source
 */
export default function ProfileImage({ source }) {
    return (
        <Image
            style={styles.image}
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