import React, { FC } from 'react'
import {Text, View} from 'react-native';
import { DetailsOrganismsProps } from '../../../types/OrganismsTypes';

const DetailsOrganisms: FC<DetailsOrganismsProps> = ({user}) => {
    
  return (
    <View>
     <Text> {user.name} </Text>
    </View>
  )
}

export default DetailsOrganisms;