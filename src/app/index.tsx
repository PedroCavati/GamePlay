import { BackgroundView } from '@/components';
import { LoginBackgroundBanner } from '@/components/login';
import { colors, typography } from '@/themes';
import { StyleSheet, Text, View } from 'react-native';

export default function Login() {
  return (
    <BackgroundView>
      <LoginBackgroundBanner/>
      <View style={ styles.bottomContainer }>
        <Text style={ styles.titleLabel }>
          Conecte-se e organize suas jogatinas
        </Text>
        <Text style={ styles.subtitleLabel }>
          Crie grupos para jogar seus games favoritos com seus amigos
        </Text>
      </View>
    </BackgroundView>
  );

}

const styles = StyleSheet.create({
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