import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

const Profile = () => {
  // const route = useRoute()
  const navigation = useNavigation()
 
  // const {id, name } = route.params
  // console.log(id, name)
  return (
    <View>
    <Text style={{justifyContent:'center', alignItems:'center'  , fontSize:24, fontWeight:'bold'}}>Profile</Text>

        <Button title="Go to About" onPress={() => navigation.navigate('About')} />
    
  </View>
  )
}

export default Profile

const styles = StyleSheet.create({})