import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTab from './src/screens/BottomTab'

const Stack = createNativeStackNavigator()

export default function App() {
  return <BottomTab />
}
