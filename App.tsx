import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/screens/HomeScreen'
import BottomTab from './src/screens/BottomTab'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
      <BottomTab />
  )
}
