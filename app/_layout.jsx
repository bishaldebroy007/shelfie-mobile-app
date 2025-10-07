import { StyleSheet, Text, View } from 'react-native'
import { Slot, Stack } from 'expo-router'

const Rootlayout = () => {
  return (
    <View style={{flex: 1}}>
      {/* <Slot/> */}
      {/* <Stack/> */}
      <Stack screenOptions={{ 
        headerStyle: { backgroundColor: '#c3c2c2ff' },
        headerTitleStyle: { fontWeight: 'bold' },
        headerTitleAlign: 'center',
        headerTintColor: '#333' 
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
  )
}

export default Rootlayout

const styles = StyleSheet.create({})