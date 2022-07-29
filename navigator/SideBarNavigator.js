import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../Screens/HomeScreen';
import PropertyScreen from '../Screens/PropertyScreen';
import VehicleScreen from '../Screens/VehicleScreen';
import BillingScreen from '../Screens/BillingScreen';
import StackNavigator from './StackNavigator';

const Drawer = createDrawerNavigator();

export default function SidebarNavigator() {
  return (
        <Drawer.Navigator>
         <Drawer.Screen name="Home" component={HomeScreen} />
         <Drawer.Screen name="Property Valuation" component={PropertyScreen} />
         <Drawer.Screen name="Billing" component={BillingScreen} />
         <Drawer.Screen name="Vehicle Val" component={VehicleScreen} />
         <Drawer.Screen name="Empty" component={StackNavigator} />
        </Drawer.Navigator>
    
  );
}