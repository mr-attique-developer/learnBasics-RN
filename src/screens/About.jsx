import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const About = () => {
  const navigation = useNavigation()
  return (
    <View>
    <Text style={{justifyContent:'center', alignItems:'center'  , fontSize:24, fontWeight:'bold', marginTop:80}}>About</Text>
    <Button title="Go Back" onPress={() => navigation.goBack()} />
  </View>
  )
}

export default About