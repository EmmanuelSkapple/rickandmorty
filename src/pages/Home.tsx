import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import {Text, View, StyleSheet} from 'react-native';
import HomeOrganisms from '../componets/organisms/HomeOrganisms';


import {getAllUsers} from '../services/UserServices'
import { UserDataTypes } from '../../types/DataTypes';
import { RootStackTypes } from '../routers/StackNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Home = ({  }) => {
    const [userList, setuserList] = useState<UserDataTypes[]>([])
    const navigation = useNavigation<NativeStackNavigationProp<RootStackTypes>>();
    const getUsersData = async() => {
        setuserList(await getAllUsers());
    }

    const goToDetailsScreen = async(user : UserDataTypes) => {
        navigation.navigate('DetailsUser',{user})
    }
    
    
    useEffect(() => {
        getUsersData()
    }, [])
    
  return (
    <View style={styles. container}>
        <HomeOrganisms
            userList={userList}
            showDetailsUser = {goToDetailsScreen}
        />
    </View>
  )
}


const styles = StyleSheet.create({
 container: {
    flex:1,
 },
});


export default Home;