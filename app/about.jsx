import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Page</Text>
      <Link style={styles.link} href="/">Go back to Home Page</Link>
    </View>
    
  );
};

export default About

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e0dfe8',
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