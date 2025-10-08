import { StyleSheet} from 'react-native'
import { Link } from 'expo-router';
// Themed components
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';

const Register = () => {
  return (
    <ThemedView style={styles.container}>

        <Spacer/>
        <ThemedText title={true} style={styles.title}>
            Register to Your Account
        </ThemedText>

        <Spacer height={100}/>
        <Link href="/register">
            <ThemedText style={{textAlign: 'center'}}>
                Register Instead
            </ThemedText>
        </Link>
    </ThemedView>
  )
}

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 30,
    },
});