import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/Home'
import Products from './pages/Products'

const AppStack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen name="Home" component={Home}/>
                <AppStack.Screen name="Products" component={Products}/>                                
            </AppStack.Navigator>
        </NavigationContainer>            
    )
}

export default Routes;