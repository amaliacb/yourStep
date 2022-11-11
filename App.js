
// import React from "react";
// import Holidays from "./components/Holidays";
// export default function App() {
//   return <Holidays />;
// }




import React from "react";
// import { StatusBar } from 'expo-status-bar';
 import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { render } from "react-dom";
import Holidays from "./components/Holidays";
// import { useEffect, useState } from 'react';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading:true,
      dataSource:null,
    }
  }

  componentDidMount () {
    return fetch('https://calendarific.com/api/v2/holidays?&api_key=0959f66552d21255bee68846611d1aecca99d7c8')
      .then((response)=> response.json)
      .then((responseJson)=> {

        this.setState({
          isLoading:false,
          dataSource:responseJson.movies,
        })

      })

     .catch((error)=> {
        console.log(error)
     });
  }

  render() {
   
      if (this.state.isLoading){
        return (
          <View style={StyleSheet.container}>
            <ActivityIndicator />
          </View>
        )
      } else {
          //el error está en este bloque de código
          let holidays = this.state.dataSource.map((val,key)=> {
            return <View key={key} style={styles.item}>
                    <Text>{val.code} </Text>
                  </View>
          });

      
       return (
        <View style={StyleSheet.container}>
          {holidays}
        </View>

        );
      }
  }

} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item:{
    flex: 1,
    alignSelf: 'stretch',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  }
});

// otros intentos
//  return (
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
