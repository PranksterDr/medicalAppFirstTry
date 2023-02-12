import { View, Text, ScrollView } from 'react-native'
import React from 'react'
const ScheduleDateCard = ({ bgColor, textColorLg, textColorSm, dayOfWeek }) => {
  const colorOfDate = {
    firstBg: 'h-[84] w-[70] items-center justify-center rounded-3xl bg-[#1C6BA4]',
    secondBg: 'h-[84] w-[70] items-center justify-center rounded-3xl bg-[#DCEDF9]',
    firstTextLg: 'text-2xl font-bold text-white',
    secondTextLg: 'text-2xl font-bold text-[#253141]',
    firstTextSm: 'text-white',
    secondTextSm: 'text-[#253141]',
  }
  return (
      <View className="mx-1">
        <View className={`${colorOfDate[bgColor]}`}>
          <Text className={`${colorOfDate[textColorLg]}`}>12</Text>
          <Text className={`${colorOfDate[textColorSm]}`}>{dayOfWeek}</Text>
        </View>
      </View>
  )
}

export default ScheduleDateCard
