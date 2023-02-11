import { View, Text, Image, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from 'react-native-heroicons/outline'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Services from './Services'
import PromoCard from './PromoCard'

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
      <View className="mx-7 flex-row">
        <View className="flex-1">
          <Text className="mb-2 text-lg text-[#253141]">Hello!</Text>
          <Text className="text-3xl font-bold text-[#253141]">Shanin Alam</Text>
        </View>

        <View className="flex-row">
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1899&q=80',
            }}
            className="h-12 w-12 rounded-2xl bg-slate-300 p-4"
          />
          <View className="fixed bottom-1 right-3">
            <View className="h-5 w-5 rounded-full border-4 border-white bg-[#1C6BA4]"></View>
          </View>
        </View>
      </View>

      {/* Search */}
      <View className="mx-7 mt-6 h-14 flex-row items-center rounded-2xl bg-blue-100 p-7">
        <View className="flex-1 flex-row space-x-2">
          <MagnifyingGlassIcon size={26} color="#8AA0BC" />
          <TextInput
            className="text-[#8AA0BC]"
            placeholder="Search medical..."
            keyboardType="default"
          ></TextInput>
        </View>
        <AdjustmentsHorizontalIcon size={36} color="black" />
      </View>

      {/* ServiceCard */}
      <View>
        <Text className="mx-7 pt-5 text-lg font-bold">Service</Text>
        <Services />
        <PromoCard />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
