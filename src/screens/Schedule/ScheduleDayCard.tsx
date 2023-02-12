import { View, Text } from 'react-native'
import React from 'react'

const ScheduleDayCard = () => {
  return (
    <View>
      {/* Separated line */}
      <View className="flex-row items-center">
        <View className="mr-4">
          <Text className="font-bold text-[#7D96B5]">12:00 PM</Text>
        </View>
        <View className="mr-10 flex-1 border-b border-dashed border-[#97ABC3]"></View>
      </View>
      {/* Card Info of current day */}
      <View></View>
    </View>
  )
}

export default ScheduleDayCard
