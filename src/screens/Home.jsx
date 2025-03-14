import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const navigation = useNavigation()
  return (
    <View style={{width:"100%", height:"100%", justifyContent:'center', alignItems:'center'  }}>
    <Text style={{ fontSize:24, fontWeight:'bold', marginTop:80}}>Home</Text>
    <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
  </View>
  )
}

export default Home

const styles = StyleSheet.create({})