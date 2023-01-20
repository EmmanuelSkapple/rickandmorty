import React, {FC} from 'react'
import {Image, View, StyleSheet} from 'react-native';
import { AvatarProps } from '../../../types/AtomsTypes';

const Avatar: FC<AvatarProps> = ({ imageUrl, size = 24, customStyle = {}}) => {
  return (
    <Image source={{uri:imageUrl}} style={{width:size,height:size,borderRadius:size/2,...customStyle}} />
  )
}

export default Avatar;