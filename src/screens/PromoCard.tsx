import { View, Text, Image } from 'react-native'
import React from 'react'

const PromoCard = () => {
  return (
    <View className="mx-7 mt-7 h-44 flex-row items-center rounded-3xl bg-blue-100">
      <View className="mx-7 w-52 flex-1">
        <Text className="text-xl font-bold text-[#0E1012] mb-3">Get the Best Medical Service </Text>
        <Text className="text-[11px] text-[#4A545E]">
          Lorem Ipsum is simply dummy text of the printing
        </Text>
      </View>
      <Image source={require('../images/PromoCardDr.png')} className="mx-3 mt-4 mr-1 h-40 w-32" />
    </View>
  )
}

export default PromoCard
