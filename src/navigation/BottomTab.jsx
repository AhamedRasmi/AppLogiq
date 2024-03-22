import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CommonScreen from '../screens/CommonScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ApplicationFonts from '../config/appFonts';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarShowLabel: true,
				headerShown: false,
				tabBarHideOnKeyboard: true,
				tabBarStyle: {
					backgroundColor: "#FFFFFF",
					height: 70,
					elevation: 5
				},
				tabBarLabelStyle: { fontFamily: ApplicationFonts.MontserratSemiBold, fontSize: 11 },
				tabBarInactiveTintColor: 'gray',
				tabBarActiveTintColor: '#4169E1',
			}}
			initialRouteName="HomeScreen"

		>
			<Tab.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={{
					tabBarLabel: 'Dashboard',
					tabBarIcon: ({ color }) => (
						<Feather name="home" color={color} size={25} />
					),
				}}
			/>
			<Tab.Screen
				name="ClubScreen"
				component={CommonScreen}
				options={{
					tabBarLabel: 'Clubs',
					tabBarIcon: ({ color }) => (
						<FontAwesome5 name="search" color={color} size={26} />
					),
				}}
			/>
			<Tab.Screen
				name="LeagueScreen"
				component={CommonScreen}
				options={{
					tabBarLabel: 'Leagues',
					tabBarIcon: ({ color }) => (
						<FontAwesome5 name="receipt" color={color} size={26} />
					),
				}}
			/>
			<Tab.Screen
				name="More"
				component={CommonScreen}
				options={{
					tabBarLabel: 'More',
					tabBarIcon: ({ color }) => (
						<MaterialIcons name="more" color={color} size={26} />
					),
				}}
			/>
		</Tab.Navigator>

	)
}

export default BottomTab;