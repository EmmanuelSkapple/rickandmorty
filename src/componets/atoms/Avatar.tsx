import React, {FC} from 'react'
import {Image, View, StyleSheet} from 'react-native';
import { AvatarProps } from '../../../types/AtomsTypes';

const Avatar: FC<AvatarProps> = ({ imageUrl, size = 24, customStyle = {}, border}) => {
    const borderStyle =border ? {borderWidth:size/24,borderColor:'#ffff'} :{}
  return (
    <Image
      source={{ uri: imageUrl }}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        ...borderStyle,
        ...customStyle
      }}
    />
    )
}

export default Avatar;