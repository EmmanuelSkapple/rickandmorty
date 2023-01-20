import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../pages/Home';
import DetailsUser from '../pages/DetailsUser';
import { UserDataTypes } from "../../types/DataTypes";
export type RootStackTypes = {
    Home: undefined;
    DetailsUser: {
        user: UserDataTypes
    }
}


const StackComponent = createNativeStackNavigator<RootStackTypes>();

export default function StackMain() {
  return (
    <StackComponent.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName='Home'
    >
      {/* Tutorial Overlay */}
      <StackComponent.Screen name='Home' component={Home} />
      <StackComponent.Screen name='DetailsUser' component={DetailsUser} />
    </StackComponent.Navigator>
  )
}