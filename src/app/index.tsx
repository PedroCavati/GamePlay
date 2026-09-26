import { ActionButton, BackgroundView } from '@/components';
import { colors, typography } from '@/themes';
import { FontAwesome6 } from '@expo/vector-icons';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {

  function handlePress() {

  }

  return (
    <BackgroundView>
      <SafeAreaView>
        <View>
          <ImageBackground
            style={styles.backgroundImage}
            source={require('../../assets/images/login-background-one.png')}
          >
            <Image
              style={styles.foregroundImage}
              source={require('../../assets/images/login-character.png')}
            >
            </Image>
          </ImageBackground>
        </View>
      </SafeAreaView>
      <View style={styles.bottomContainer}>
        <Text style={styles.titleLabel}>
          Conecte-se e organize suas jogatinas
        </Text>
        <Text style={styles.subtitleLabel}>
          Crie grupos para jogar seus games favoritos com seus amigos
        </Text>
      </View>
      <ActionButton
        icon={<FontAwesome6 name="discord" size={24} color="#FFF" />}
        onPress={handlePress} />
    </BackgroundView>
  );

}

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: 360,
    justifyContent: 'flex-end',
    resizeMode: 'cover'
  },
  foregroundImage: {
    width: '100%',
    height: 280,
    marginTop: 50,
    resizeMode: 'stretch'
  },
  bottomContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: -24,
  },

  titleLabel: {
    ...typography.banner,
    color: colors.textWhite,
    textAlign: 'center',
  },

  subtitleLabel: {
    ...typography.bannerSubtitle,
    color: colors.textWhite,
    textAlign: 'center',
    width: 247,
    marginTop: 16,
  }
});