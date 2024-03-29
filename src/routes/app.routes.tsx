import React from 'react';
import IOIcon from 'react-native-vector-icons/Ionicons'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootBottomParamList, RootStackParamList } from '../global/types/navigation';
import Feed from '../screens/Feed';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { switchColor } from '../utils/colors';
import Users from '../screens/Users';
import TabBarButton from '../components/TabBarButton';
import AddPost from '../screens/AddPost';
import EditPost from '../screens/EditPost';


const BottonNavigation = createBottomTabNavigator<RootBottomParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();


const { Navigator, Screen } = BottonNavigation;
export const MainRoutes: React.FC = () => {
    const barOptions = {
        tabBarShowLabel: false,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        
    }
    return (
        <Navigator initialRouteName="Feed"
            screenOptions={barOptions}
        >
            <Screen
                options={{ tabBarIcon: ({ focused }) => <IOIcon name="home" color={switchColor(focused)} size={26} /> }}
                name="Feed" component={FeedRoutes} />
            <Screen
                name="AddPost" component={AddPost}
                options={
                    {
                        tabBarIcon: () => {
                            return <TabBarButton 
                                name="add-circle-sharp"
                                focused />
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

export const FeedRoutes: React.FC = () => {
    const options = { headerShown: false }
    return (
        <Stack.Navigator screenOptions={options}>
            <Stack.Screen name="Posts" component={Feed} />
            <Stack.Screen name="EditPost" component={EditPost} />
        </Stack.Navigator>
    );
}


