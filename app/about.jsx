import { StyleSheet, useColorScheme } from 'react-native';
import { Link } from 'expo-router';
import { Colors } from '../constants/Colors';
// Themed components
import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';
import Spacer from '../components/Spacer';


const About = () => {

  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <ThemedView style={[styles.container, {backgroundColor: theme.background}]}>
      <ThemedText style={styles.title}>About Page</ThemedText>
      <Link style={styles.link} href="/">
        <ThemedText>Go back to Home Page</ThemedText>
      </Link>
    </ThemedView>
    
  );
};

export default About

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