import {UserDataTypes} from './DataTypes';

export interface UserListProps {
    userList: UserDataTypes[];
    showDetailsUser: (user : UserDataTypes) => void;
}

export interface UserItemProps {
    user: UserDataTypes;
}