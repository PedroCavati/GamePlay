import { Image, ImageBackground, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/**
 * 
 * @returns 
 */
export default function LoginBackground() {
    return (
        <SafeAreaView>
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
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: 360,
        justifyContent: 'flex-end',
        resizeMode: 'cover'
    },
    foreground: {
        width: '100%',
        height: 280,
        marginTop: 50,
        resizeMode: 'stretch'
    },
})