import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Slot, Stack } from 'expo-router'
import { Colors } from '../constants/Colors';
import { StatusBar } from 'expo-status-bar';

const Rootlayout = () => {

  const colorScheme = useColorScheme();
  // Just checking the output of useColorScheme; which is light by default
  // console.log(colorScheme);
  const theme = Colors[colorScheme] ?? Colors.light;  // The ?? will work as a fallback if colorScheme is null

  return (
    <>
      <StatusBar value="auto" />
      <View style={{flex: 1}}>
        <Stack screenOptions={{ 
          headerStyle: { backgroundColor: theme.navBackground },
          headerTitleStyle: { fontWeight: 'bold' },
          headerTitleAlign: 'center',
          headerTintColor: theme.title,
          }}>
          <Stack.Screen
            name="index"
            options={{
              title: 'Home'
            }}
          />
          <Stack.Screen
            name="about"
            options={{
              title: 'About'
            }}
          />
          <Stack.Screen
            name="contact"
            options={{
              title: 'Contact'
            }}
          />
        </Stack>
        <Text>Footer</Text>
      </View>
    </>
  )
}

export default Rootlayout

const styles = StyleSheet.create({})