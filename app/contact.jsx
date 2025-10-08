import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';
// Themed components
import ThemedView from '../components/ThemedView'
import Spacer from '../components/Spacer';
import ThemedText from '../components/ThemedText';

const Contact = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Contact Page</ThemedText>
      <Link style={styles.link} href="/">
        <ThemedText>Go back to Home Page</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Contact;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
      title: {
        fontWeight: 'bold',
        fontSize: 18,
      },
      img: {
        marginVertical: 20, 
      },
      link: {
        marginVertical: 10,
        borderBottomWidth: 1,
      },
})