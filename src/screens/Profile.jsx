import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Profile = () => {
  const navigation = useNavigation()
  return (
    <View>
    <Text style={{justifyContent:'center', alignItems:'center'  , fontSize:24, fontWeight:'bold', marginTop:80}}>Profile</Text>
        <Button title="Go to About" onPress={() => navigation.navigate('About')} />
    
  </View>
  )
}

export default Profile

const styles = StyleSheet.create({})