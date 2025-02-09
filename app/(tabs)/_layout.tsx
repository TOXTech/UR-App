import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Charts from './charts';
import Dashboard from './dashboard';
import Tracking from './tracking';

const Tab = createBottomTabNavigator();

export default function TabsLayout() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Charts" component={Charts} />
      <Tab.Screen name="Tracking" component={Tracking} />
    </Tab.Navigator>
  );
}