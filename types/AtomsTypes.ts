import {UserDataTypes} from './DataTypes';

export interface SearchBarProps {
    value: string;
    callBackChange: (text : string) => void;
}