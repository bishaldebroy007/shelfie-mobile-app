import { Image, StyleSheet, Text,  } from 'react-native';

import {Link} from "expo-router";
// Themed components
import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo';
import Spacer from '../components/Spacer';
import ThemedText from '../components/ThemedText';

const Home = () => {
  return (
    <ThemedView style={styles.container}>

        <ThemedLogo/>
        <Spacer height={20} />

        <ThemedText style={styles.title} title={true}>The Number 1</ThemedText>

        <Spacer height={10}/>
        <ThemedText>
            Reading List App
        </ThemedText>
        <Spacer/>

        <Link style={styles.link} href="/login">
            <ThemedText>Login</ThemedText>
        </Link>
        <Link style={styles.link} href="/register">
          <ThemedText>Register</ThemedText>
        </Link> 
    </ThemedView>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  // img: {
  //   marginVertical: 20, 
  // },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
    fontSize: 13,
  },
})