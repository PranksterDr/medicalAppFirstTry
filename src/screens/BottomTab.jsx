import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import HomeScreen from './HomeScreen'
import { HomeIcon } from 'react-native-heroicons/outline'
const Tab = createBottomTabNavigator()

const BottomTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => {
              return <HomeIcon size={32} color="gray" />
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default BottomTab
