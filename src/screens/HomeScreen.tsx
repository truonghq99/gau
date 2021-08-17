import * as React from 'react';
import {Text , View} from 'react-native'

import GirlScreen from './GirlScreen'
import BoyScreen from './boyScreen'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator()

const HomeScreen: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Girl"
        options={{tabBarIcon: () =><Text>❤️</Text>}}
        component={GirlScreen}
      />
      <Tab.Screen
        name="Boy"
        options={{tabBarIcon: () =><Text>❤️</Text>}}
        component={BoyScreen}
      /> 
    </Tab.Navigator>
  )
}

export default HomeScreen
