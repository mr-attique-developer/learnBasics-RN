import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import About from './src/screens/About';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyStack() {
  return (
    <Stack.Navigator 
    initialRouteName="Home"
    screenOptions={{
      headerStyle:{backgroundColor: 'yellow'},
    }}
    >
      <Stack.Screen
       name="Home"
        component={Home} 
        options={{ headerShown: false }}

        />
      <Stack.Screen name="Profile" component={Profile} 
        options={{ headerStyle: {backgroundColor: 'tomato'}, headerTintColor: 'white', headerBackTitle:"Back"}}
      
      />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator 
    screenOptions={{
      tabBarStyle:{
        height: 80,
        backgroundColor: 'lightblue',
      },
      tabBarInactiveTintColor: 'black',
      tabBarActiveTintColor: 'tomato',
      tabBarLabelStyle:{
fontSize: 20,
fontWeight:'bold'
      },
   
    }}
    initialRouteName='Home'
    >
      <Tab.Screen
       name="Home" 
       component={Home}
       options={{
        tabBarIcon:(()=>(
          <Icon name="home" size={30} color="#900" />
        ))
       }}
       />
       
      <Tab.Screen
       name="Profile"
        component={Profile} 
        options={{
          tabBarIcon:(()=>(
            <Icon name="profile" size={30} color="#900" />
          ))
         }}
        />
      <Tab.Screen 
      name="About" 
      component={About}
      options={{
        tabBarIcon:(()=>(
          <Icon name="meho" size={30} color="#900" />
        ))
       }}
      />
    </Tab.Navigator>
  );
}
const App = () => {
  return (
    <NavigationContainer>
      {/* <MyStack /> */}
      <TabNavigator/>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});

// import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
// import React, { useState } from 'react'

// const App = () => {
//   const [name, setName] = useState('')
//   const [submitName, setSubmitName] = useState("")

//   const handlePress=()=>{
//     if(name.trim() === ''){
//       Alert.alert('Please enter a name')
//     }
//     setSubmitName(name)
//     setName('')
//   }
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>App</Text>
//       <TextInput
//       style={styles.textInput}
//       keyboardType='decimal-pad'
//       placeholder='Enter your name'
//       value={name}
//       onChangeText={(text) => setName(text)}
//       />
//       <Button title='Submit' onPress={handlePress}/>
//       <View>
//         {
//           submitName && (

//             <Text style={styles.text}>Name: {submitName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</Text>
//           )
//         }
//       </View>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#dadada',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     gap:10
//   },
//   text:{
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'black',
//   },
//   textInput:{
//     width:"100%",
//     padding:10,
//     borderRadius: 10,
//     borderWidth: 1,

//   }
// })

// // import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
// // import React from 'react';
// // const dummyUsers = [
// //   {
// //     id: 1,
// //     name: "John Doe",
// //     email: "john.doe@example.com",
// //     image: "https://images.unsplash.com/photo-1741471884167-a2b08fb14a3e?w=500&auto=format&fit=crop&q=60",
// //   },
// //   {
// //     id: 2,
// //     name: "Jane Smith",
// //     email: "jane.smith@example.com",
// //     image: "https://images.unsplash.com/photo-1741017638661-dab7a153f925?w=500&auto=format&fit=crop&q=60",
// //   },
// //   {
// //     id: 3,
// //     name: "Alice Johnson",
// //     email: "alice.johnson@example.com",
// //     image: "https://images.unsplash.com/photo-1741471884167-a2b08fb14a3e?w=500&auto=format&fit=crop&q=60",
// //   },
// //   {
// //     id: 4,
// //     name: "Michael Brown",
// //     email: "michael.brown@example.com",
// //     image: "https://images.unsplash.com/photo-1741017638661-dab7a153f925?w=500&auto=format&fit=crop&q=60",
// //   },
// //   {
// //     id: 5,
// //     name: "Emily Davis",
// //     email: "emily.davis@example.com",
// //     image: "https://images.unsplash.com/photo-1741471884167-a2b08fb14a3e?w=500&auto=format&fit=crop&q=60",
// //   },
// //   {
// //     id: 6,
// //     name: "Daniel Wilson",
// //     email: "daniel.wilson@example.com",
// //     image: "https://images.unsplash.com/photo-1741017638661-dab7a153f925?w=500&auto=format&fit=crop&q=60",
// //   },
// //   {
// //     id: 7,
// //     name: "Sophia Martinez",
// //     email: "sophia.martinez@example.com",
// //     image: "https://images.unsplash.com/photo-1741471884167-a2b08fb14a3e?w=500&auto=format&fit=crop&q=60",
// //   },
// //   {
// //     id: 8,
// //     name: "James Anderson",
// //     email: "james.anderson@example.com",
// //     image: "https://images.unsplash.com/photo-1741017638661-dab7a153f925?w=500&auto=format&fit=crop&q=60",
// //   },
// //   {
// //     id: 9,
// //     name: "Olivia Thomas",
// //     email: "olivia.thomas@example.com",
// //     image: "https://images.unsplash.com/photo-1741471884167-a2b08fb14a3e?w=500&auto=format&fit=crop&q=60",
// //   },
// //   {
// //     id: 10,
// //     name: "William Harris",
// //     email: "william.harris@example.com",
// //     image: "https://images.unsplash.com/photo-1741017638661-dab7a153f925?w=500&auto=format&fit=crop&q=60",
// //   },
// //   {
// //     id: 11,
// //     name: "Ava Clark",
// //     email: "ava.clark@example.com",
// //     image: "https://images.unsplash.com/photo-1741471884167-a2b08fb14a3e?w=500&auto=format&fit=crop&q=60",
// //   },
// //   {
// //     id: 12,
// //     name: "Benjamin Lewis",
// //     email: "benjamin.lewis@example.com",
// //     image: "https://images.unsplash.com/photo-1741017638661-dab7a153f925?w=500&auto=format&fit=crop&q=60",
// //   },
// //   {
// //     id: 13,
// //     name: "Charlotte Walker",
// //     email: "charlotte.walker@example.com",
// //     image: "https://images.unsplash.com/photo-1741471884167-a2b08fb14a3e?w=500&auto=format&fit=crop&q=60",
// //   },
// //   {
// //     id: 14,
// //     name: "Henry Hall",
// //     email: "henry.hall@example.com",
// //     image: "https://images.unsplash.com/photo-1741017638661-dab7a153f925?w=500&auto=format&fit=crop&q=60",
// //   },
// //   {
// //     id: 15,
// //     name: "Mia Allen",
// //     email: "mia.allen@example.com",
// //     image: "https://images.unsplash.com/photo-1741471884167-a2b08fb14a3e?w=500&auto=format&fit=crop&q=60",
// //   },
// //   {
// //     id: 16,
// //     name: "Alexander Young",
// //     email: "alexander.young@example.com",
// //     image: "https://images.unsplash.com/photo-1741017638661-dab7a153f925?w=500&auto=format&fit=crop&q=60",
// //   },
// //   {
// //     id: 17,
// //     name: "Harper King",
// //     email: "harper.king@example.com",
// //     image: "https://images.unsplash.com/photo-1741471884167-a2b08fb14a3e?w=500&auto=format&fit=crop&q=60",
// //   },
// //   {
// //     id: 18,
// //     name: "Ethan Wright",
// //     email: "ethan.wright@example.com",
// //     image: "https://images.unsplash.com/photo-1741017638661-dab7a153f925?w=500&auto=format&fit=crop&q=60",
// //   },
// //   {
// //     id: 19,
// //     name: "Amelia Scott",
// //     email: "amelia.scott@example.com",
// //     image: "https://images.unsplash.com/photo-1741471884167-a2b08fb14a3e?w=500&auto=format&fit=crop&q=60",
// //   },
// //   {
// //     id: 20,
// //     name: "Lucas Green",
// //     email: "lucas.green@example.com",
// //     image: "https://images.unsplash.com/photo-1741017638661-dab7a153f925?w=500&auto=format&fit=crop&q=60",
// //   },
// // ];

// // const App = () => {
// //   return (

// //     <FlatList
// //     style={styles.scrollView}
// //     data={dummyUsers}
// //     keyExtractor={(item)=> item.id.toString()}
// //     renderItem={(item)=>(
// //       <View style={styles.box}>
// //         <Image style = {{ width:100, height:100, borderRadius:50}}  source={{uri: item.item.image}} />
// //         <Text  style={{   color:"white",fontSize:20}} >{item.item.name}</Text>
// //         <Text style={{color:"yellow", fontWeight:'bold'}} >{item.item.email}</Text>
// //       </View>
// //     )}
// //     // horizontal
// //     // columnWrapperStyle={{justifyContent: 'center', gap:10}}
// //     ItemSeparatorComponent={() => <View style={{height:10}} />}
// //     />
// //     // <ScrollView
// //     //   contentContainerStyle={{ gap: 10 }}
// //     //   horizontal={true}
// //     //   showsHorizontalScrollIndicator={false}
// //     //   style={styles.scrollView}
// //     // >
// //     //   <View style={styles.box1} />
// //     //   <View style={styles.box2} />
// //     //   <View style={styles.box3} />
// //     //   <View style={styles.box1} />
// //     //   <View style={styles.box2} />
// //     //   <View style={styles.box3} />
// //     //   <View style={styles.box1} />
// //     //   <View style={styles.box2} />
// //     //   <View style={styles.box3} />
// //     //   <View style={styles.box1} />
// //     //   <View style={styles.box2} />
// //     //   <View style={styles.box3} />
// //     //   <View style={styles.box1} />
// //     //   <View style={styles.box2} />
// //     //   <View style={styles.box3} />
// //     //   <View style={styles.box1} />
// //     //   <View style={styles.box2} />
// //     //   <View style={styles.box3} />
// //     // </ScrollView>
// //   );
// // };

// // export default App;

// // const styles = StyleSheet.create({
// //   scrollView: {
// //     backgroundColor: 'black',
// //     marginTop:80,
// //     // flex: 1
// //   },
// //   box: {
// //     backgroundColor: 'red',
// //     width: 180,
// //     height: 180,
// //     borderRadius: 20,
// //     alignItems: 'center',

// //   },
// //   box2: {
// //     backgroundColor: 'green',
// //     width: 80,
// //     height: 80,
// //     borderRadius: 50,
// //   },
// //   box3: {
// //     backgroundColor: 'red',
// //     width: 80,
// //     height: 80,
// //     borderRadius: 50,
// //   },
// // });
