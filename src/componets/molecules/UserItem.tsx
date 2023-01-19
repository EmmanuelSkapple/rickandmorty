import React, { FC } from 'react'
import {Text, View} from 'react-native';
import { UserItemProps } from '../../../types/MoleculesTypes';



const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <View>
     <Text> {user.name} </Text>
    </View>
  )
}

export default UserItem;