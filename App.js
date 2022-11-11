
import React from "react";
import Holidays from "./components/Holidays";
export default function App() {
  return <Holidays />;
}
























// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { useEffect, useState } from 'react';

// export default function App() {

  

//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }


// const getData=async()=>{
//   try{
//     const response=await fetch('https://jsonplaceholder.typicode.com/users');
//     const data=await response.json();
//     setUsersData(data)
//   }
//   catch(error){
//     console.log(error)
//   }
//   finally{
//     setFetchedState(null);
//   }
// }

// useEffect(() => {
//   setFetchedState('loading')
//   setTimeout(()=>getData(),3000);
// },[])

// const [fetchedState,setFetchedState]=useState(null);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   loadingtext:{
//     fontSize: 28,
//     fontWeight: 'bold',
//   },
//   text:{
//     fontSize:24,
//     margin:10
//   }
// });
