import { StyleSheet} from 'react-native'
import Spacer from '../../components/Spacer';
import { Link } from 'expo-router';



const login = () => {
  return (
    <ThemedView style={styles.container}>

        <Spacer/>
        <ThemedText title={true} style={style=styles.title}>
            Login to Your Account
        </ThemedText>

        <Spacer height={100}/>
        <Link href="/register">
            <ThemedText style={textAlign='center'}>
                Register Instead
            </ThemedText>
        </Link>
    </ThemedView>
  )
}

export default login;

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