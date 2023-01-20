import React, { FC } from 'react'
import {FlatList, StyleSheet, View} from 'react-native';
import { UserDataTypes } from '../../../types/DataTypes';
import { UserListProps } from '../../../types/MoleculesTypes';
import UserItem from './UserItem';



const UserList: FC<UserListProps> = ({userList, showDetailsUser }) => {
    const renderItemUser = ({item, index }:{item : UserDataTypes, index : number}) => {
        return(
            <UserItem key={item.id} user={item} showDetailsUser={showDetailsUser} />
        )
    }
  return (
    <View style={styles.listContainer}>
        <FlatList
            data={userList}
            renderItem={renderItemUser}
            showsVerticalScrollIndicator={false}
        />
    </View>
  )
}

const styles = StyleSheet.create({
listContainer: {
    flex:1,
    width:'100%',
    marginTop:24
 },
});
export default UserList;