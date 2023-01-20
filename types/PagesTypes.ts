import { UserDataTypes } from "./DataTypes"

export interface DetailsUserProps {
    route?:{
        params:{
            user: UserDataTypes
        }
    }
}