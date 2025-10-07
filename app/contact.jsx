import { StyleSheet, Text } from 'react-native';
import { Link } from 'expo-router';
import ThemedView from '../components/ThemedView';

const Contact = () => {
  return (
    <ThemedView style={styles.container}>
      <Text style={styles.title}>Contact Page</Text>
      <Link style={styles.link} href="/">Go back to Home Page</Link>
    </ThemedView>
    
  );
};

export default Contact

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#e0dfe8',
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