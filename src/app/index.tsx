import { StyleSheet, Text } from 'react-native';
import BackgroundView from '../components/BackgroundView';
import LoginBackground from '../components/login/LoginBackground';

export default function Login() {
  return (
    <BackgroundView>
      <LoginBackground/>
      <Text style={ styles.titleLabel }>

      </Text>
    </BackgroundView>
  );

}

const styles = StyleSheet.create({
  titleLabel:{

  }
});