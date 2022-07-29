import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../Screens/HomeScreen';
import NotificationScreen from '../Screens/NotificationScreen';
import BillingScreen from '../Screens/BillingScreen';
import EmptyScreen from '../Screens/EmptyScreen';

const Drawer = createDrawerNavigator();

export default function Submenu() {
  return (
        <Drawer.Navigator initialRouteName="Home">
         <Drawer.Screen name="New Info" component={EmptyScreen} />
         <Drawer.Screen name="Schedule" component={EmptyScreen} />
         <Drawer.Screen name="MIS" component={EmptyScreen} />
         <Drawer.Screen name="Inspection Done" component={EmptyScreen} />
         <Drawer.Screen name="Create Report" component={EmptyScreen} />
         <Drawer.Screen name="Modify Report" component={EmptyScreen} />
         <Drawer.Screen name="Final Report" component={EmptyScreen} />
         <Drawer.Screen name="Modify after Final" component={EmptyScreen} />
        </Drawer.Navigator>
    
  );
}