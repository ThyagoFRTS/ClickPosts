import React from 'react';
import { theme } from '../global/theme';
import Icon from 'react-native-vector-icons/FontAwesome'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootBottomParamList, RootStackParamList } from '../global/types/navigation';
import Home from '../screens/Home';

const BottonNavigation = createMaterialBottomTabNavigator<RootBottomParamList>();
//const Stack = createNativeStackNavigator<RootStackParamList>();

const { Navigator, Screen } = BottonNavigation;
export const MainRoutes: React.FC = () => {
    return (
        <Navigator labeled={false} initialRouteName="AddPhoto"
            barStyle={{ backgroundColor: theme.background }}
        >
            <Screen
                options={{ tabBarIcon: ({ color }) => <Icon name="home" color={color} size={26} /> }}
                name="Home" component={Home} />
            <Screen
                options={{ tabBarIcon: ({ color }) => <Icon name="camera" color={color} size={26} /> }}
                name="AddPhoto" component={Home} />
            <Screen
                options={{ tabBarIcon: ({ color }) => <Icon name="user" color={color} size={26} /> }}
                name="Profile" component={Home} />
        </Navigator>
    );
}
/*
export const AuthRoutes: React.FC = () => {
    const options = { headerShown: false }
    return (
        <Stack.Navigator screenOptions={options}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
    );
}
*/
