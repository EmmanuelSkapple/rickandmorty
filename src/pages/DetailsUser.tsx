import { useNavigation } from '@react-navigation/native';
import React from 'react'
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import { DetailsUserProps } from '../../types/PagesTypes';
import DetailsOrganisms from '../componets/organisms/DetailsOrganisms';

const DetailsUser = ({ route }:DetailsUserProps) => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Feather name='arrow-left' size={30} />
            </TouchableOpacity>
        </View>
        <DetailsOrganisms user={route?.params?.user} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
 container: {
    flex:1,
    padding:12,
 },
 headerContainer:{
    width:'100%',
    alignContent:'flex-start'
 }
});

export default DetailsUser;