import React from 'react';
import { theme } from '../global/theme';
import IOIcon from 'react-native-vector-icons/Ionicons'
import { createMaterialBottomTabNavigator, MaterialBottomTabNavigationOptions } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootBottomParamList, RootStackParamList } from '../global/types/navigation';
import Home from '../screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { switchColor } from '../utils/colors';
import Users from '../screens/Users';


const BottonNavigation = createBottomTabNavigator<RootBottomParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();


const { Navigator, Screen } = BottonNavigation;
export const MainRoutes: React.FC = () => {
    const barOptions = {
        tabBarShowLabel: false,
        headerShown: false,
    }
    return (
        <Navigator initialRouteName="Posts"
            screenOptions={barOptions}
        >
            <Screen
                options={{ tabBarIcon: ({ focused }) => <IOIcon name="home" color={switchColor(focused)} size={26} /> }}
                name="Posts" component={Home} />
            <Screen
                name="AddPost" component={Home}
                options={
                    {
                        tabBarIcon: ({ focused }) => {
                            return <IOIcon 
                                name="add-circle-sharp"
                                color={switchColor(focused)}
                                size={26} />
                        }
                    }
                }
            />
            <Screen
                options={{ tabBarIcon: ({ focused }) => <IOIcon name="people" color={switchColor(focused)} size={26} /> }}
                name="Users" component={Users} />
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

