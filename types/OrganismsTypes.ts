import {UserDataTypes} from './DataTypes';

export interface HomeOrganismsProps {
    userList: UserDataTypes[];
    showDetailsUser: (user : UserDataTypes) => void;
}

export interface DetailsOrganismsProps  {
    user : UserDataTypes | undefined;
}