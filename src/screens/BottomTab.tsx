import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import React from 'react'
import HomeScreen from './Home/HomeScreen'
import Shchedule from './Schedule/Shchedule'
import Icon, { Icons } from './Icons'

const Tab = createMaterialBottomTabNavigator()

const bottomTabDataArr = [
  {
    id: 1,
    name: 'Home',
    component: HomeScreen,
    activeColor: '#1C6BA4',
    inactiveColor: '#7B8D9E',
    tabBarLabel: 'Home',
    type: Icons.Ionicons,
    activeIcon: 'home',
    inActiveIcon: 'home-outline',
  },
  {
    id: 2,
    name: 'Schedule',
    component: Shchedule,
    activeColor: '#1C6BA4',
    inactiveColor: '#7B8D9E',
    tabBarLabel: 'Schedule',
    type: Icons.Ionicons,
    activeIcon: 'calendar',
    inActiveIcon: 'calendar-outline',
  },
  {
    id: 3,
    name: 'Report',
    component: HomeScreen,
    activeColor: '#1C6BA4',
    inactiveColor: '#7B8D9E',
    tabBarLabel: 'Report',
    type: Icons.FontAwesome,
    activeIcon: 'file-text',
    inActiveIcon: 'file-text-o',
  },
  {
    id: 4,
    name: 'Notification',
    component: HomeScreen,
    activeColor: '#1C6BA4',
    inactiveColor: '#7B8D9E',
    tabBarLabel: 'Notification',
    type: Icons.Ionicons,
    activeIcon: 'ios-notifications-sharp',
    inActiveIcon: 'ios-notifications-outline',
  },
]

const BottomTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="gray"
        barStyle={{ backgroundColor: 'white' }}
      >
        {bottomTabDataArr.map((item) => {
          return (
            <Tab.Screen
              key={item.id}
              name={item.name}
              component={item.component}
              options={{
                tabBarIcon: ({ color, focused }) => {
                  return (
                    <Icon
                      type={item.type}
                      name={focused ? item.activeIcon : item.inActiveIcon}
                      color={focused ? item.activeColor : item.inactiveColor}
                      size={28}
                    />
                  )
                },
              }}
            />
          )
        })}
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default BottomTab
