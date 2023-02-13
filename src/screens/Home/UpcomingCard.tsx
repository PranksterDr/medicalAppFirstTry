import { View, Text } from 'react-native'
import React from 'react'
import { EllipsisHorizontalIcon } from 'react-native-heroicons/outline'

interface dtArr {
  key: number
  date: number
  dayOfWeek: string
  time: string
  doctor: string
  profile: string
  color: string
  bgColor: string
}

const UpcomingCard = (data: dtArr) => {
  const { date, dayOfWeek, time, doctor, profile, color, bgColor } = data
  return (
    <View
      className="mx-4 h-28 w-72 flex-row items-center justify-center rounded-3xl"
      style={{ backgroundColor: bgColor }}
    >
      <View
        className="mx-3 h-20 w-16 items-center justify-center rounded-3xl"
        style={{ backgroundColor: color }}
      >
        <Text className="text-2xl font-bold text-white opacity-100">{date}</Text>
        <Text className="font-bold text-white opacity-100">{dayOfWeek}</Text>
      </View>
      <View>
        <Text className=" text-slate-600">{time}</Text>
        <Text className="text-xl font-bold text-slate-900">{doctor}</Text>
        <Text className=" text-slate-500 opacity-50">{profile}</Text>
      </View>
      <View className="mb-16">
        <EllipsisHorizontalIcon color={'rgba(255,255,255,0.62)'} />
      </View>
    </View>
  )
}

export default UpcomingCard
