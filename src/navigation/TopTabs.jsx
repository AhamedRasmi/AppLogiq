import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View } from "react-native";
import OverView from '../components/OverView';
import ApplicationFonts from '../config/appFonts';

const Tab = createMaterialTopTabNavigator();

const Events = () => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Events</Text>
		</View>
	)
}
const Payments = () => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text >Payments</Text>
		</View>
	)
}

const Places = () => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Places</Text>
		</View>
	)
}

const TopTabs = () => {
	return (
		<Tab.Navigator screenOptions={{
			tabBarLabelStyle: {
				fontSize: 11,
				fontFamily: ApplicationFonts.MontserratSemiBold
			},
			tabBarStyle: {
				backgroundColor: "#FFF",
				width: '100%'
			},
			tabBarActiveTintColor: '#4169E1',
			tabBarInactiveTintColor: '#A9A9A9',
			tabBarIndicatorStyle: {
				alignSelf: 'center',
				backgroundColor: '#4169E1',
				width: 80,
				marginLeft: (100 - 20) / 4
			}
		}}>
			<Tab.Screen name="OverView" component={OverView} />
			<Tab.Screen name="Events" component={Events} />
			<Tab.Screen name="Payments" component={Payments} />
			<Tab.Screen name="Places" component={Places} />
		</Tab.Navigator>
	)
}

export default TopTabs;