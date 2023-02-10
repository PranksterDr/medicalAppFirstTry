import { View, Text, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from 'react-native-heroicons/outline'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

const HomeScreen = () => {
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])
  return (
    <SafeAreaView className="bg-white">
      {/* Header */}
      <View className="flex-row">
        <View className="mx-2 flex-1">
          <Text className="mb-2 text-lg">Hello!</Text>
          <Text className="text-3xl font-bold">Shanin Alam</Text>
        </View>
        <View className="flex-row">
          <Image
            source={{ uri: 'https://links.papareact.com/wru' }}
            className="h-12 w-12 rounded-2xl bg-slate-300 p-4"
          />
          <View className="fixed bottom-1 right-3">
            <View className="h-5 w-5 rounded-full border-4 border-white bg-[#1C6BA4]"></View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
