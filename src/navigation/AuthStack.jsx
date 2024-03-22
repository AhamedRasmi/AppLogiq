import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './BottomTab';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
	return (
		<Stack.Navigator
			initialRouteName='BottomTab'
			screenOptions={{
				headerShown: false, statusBarColor: '#1a3c43'
			}}>
			<Stack.Screen name="BottomTab" component={BottomTab} />
		</Stack.Navigator>
	)
}

export default AuthStack;