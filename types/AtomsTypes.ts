import { ImageStyle } from 'react-native';
import {UserDataTypes} from './DataTypes';

export interface SearchBarProps {
    value: string;
    callBackChange: (text : string) => void;
}

export interface AvatarProps {
    imageUrl : string;
    size?: number;
    customStyle?: ImageStyle;
    border?: boolean;
}

export interface ItemInfoUserProps {
    title: string;
    subtitle: string;
    iconName?: string;
}