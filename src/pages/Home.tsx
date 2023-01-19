import React, { useEffect } from 'react'
import {Text, View, StyleSheet} from 'react-native';


import {getAllUsers} from '../services/UserServices'

const Home = ({  }) => {
    const getUsersData = async() => {
        const userList = await getAllUsers();
        console.log(userList);
    }
    
    useEffect(() => {
        getUsersData()
    }, [])
    
  return (
    <View style={styles. container}>
     <Text> Home </Text>
    </View>
  )
}


const styles = StyleSheet.create({
 container: {
    flex:1,
 },
});


export default Home;