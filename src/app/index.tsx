import { StyleSheet } from 'react-native';
import BackgroundView from '../components/BackgroundView';
import LoginBackground from '../components/login/LoginBackground';

export default function Login() {
  return (
    <BackgroundView>
      <LoginBackground/>
    </BackgroundView>
  );

}

const styles = StyleSheet.create({
});