import { Image, ImageBackground, StyleSheet, View } from "react-native";

/**
 * 
 * @returns 
 */
export default function LoginBackground() {
    return (
        <View>
            <ImageBackground
                style={styles.background}
                source={require('../../../assets/images/login-background-one.png')}
            >
                <Image
                    style={styles.foreground}
                    source={require('../../../assets/images/login-character.png')}
                >
                </Image>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: 360,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'cover'
    },
    foreground: {
        width: '100%',
        height: 280,
        marginTop: 30,
        resizeMode:'stretch'
    },
})