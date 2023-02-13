import { View, Text } from 'react-native'
import React from 'react'

const ScheduleDayCard = () => {
  return (
    <View>
      {/* Separated line */}
      <View className="flex-row items-center">
        <View className="mr-4">
          <Text className="ml-5 font-bold text-[#7D96B5]">12:00 PM</Text>
        </View>
        <View className="mr-10 flex-1 border-b border-dashed border-[#97ABC3]"></View>
      </View>
      {/* Card Info of current day */}
      <View className="mx-5 ml-6 mr-9 bg-[#1C6BA4] rounded-xl h-32">
        <View>
          <Text>Hello</Text>
        </View>
      </View>
    </View>
  )
}

export default ScheduleDayCard
