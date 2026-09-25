import { Colors, Fonts } from '@/themes';
import { StyleSheet, Text, View } from 'react-native';
import BackgroundView from '../components/BackgroundView';
import LoginBackground from '../components/login/LoginBackground';

export default function Login() {
  return (
    <BackgroundView>
      <LoginBackground />
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
    ...Fonts.title,
    color: Colors.white,
    textAlign: 'center',
  },

  subtitleLabel: {
    ...Fonts.subtitle,
    color: Colors.white,
    textAlign: 'center',
    width: 247,
    marginTop: 16,
  }
});