import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../pages/Home';
import DetailsUser from '../pages/DetailsUser';
export type RootStackTypes = {
    Home: undefined;
    DetailsUser: {
        user: any
    }
}


const StackComponent = createNativeStackNavigator<RootStackTypes>();

function StackMain() {
  return (
    <StackComponent.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      {/* Tutorial Overlay */}
      <StackComponent.Screen name="Home" component={Home} />
      <StackComponent.Screen name="DetailsUser" component={DetailsUser} />
    </StackComponent.Navigator>
  )
}