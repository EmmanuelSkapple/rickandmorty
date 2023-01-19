import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import {Text, View, StyleSheet} from 'react-native';
import HomeOrganisms from '../componets/organisms/HomeOrganisms';


import {getAllUsers} from '../services/UserServices'
import { UserDataTypes } from '../../types/DataTypes';
import { RootStackTypes } from '../routers/StackNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

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
    <SafeAreaView style={styles. container}>
        <HomeOrganisms
            userList={userList}
            showDetailsUser = {goToDetailsScreen}
        />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
 container: {
    flex:1,
    padding:12
 },
});


export default Home;