import React, { useEffect } from 'react'
import {Text, View, StyleSheet} from 'react-native';
import HomeOrganisms from '../componets/organisms/HomeOrganisms';


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
        <HomeOrganisms/>
    </View>
  )
}


const styles = StyleSheet.create({
 container: {
    flex:1,
 },
});


export default Home;