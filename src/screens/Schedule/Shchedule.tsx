import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ScheduleDateCard from './ScheduleDateCard'
import { faker } from '@faker-js/faker'
import Icon, { Icons } from '../Icons'
import ScheduleDayCard from './ScheduleDayCard'
const Shchedule = () => {
  const fakeDataArr = [
    {
      id: 1,
      dayOfWeek: faker.date.weekday({ abbr: true }),
      fullName: `Dr.${faker.name.fullName()}`,
    },
    {
      id: 2,
      dayOfWeek: faker.date.weekday({ abbr: true }),
      fullName: `Dr.${faker.name.fullName()}`,
    },
    {
      id: 3,
      dayOfWeek: faker.date.weekday({ abbr: true }),
      fullName: `Dr.${faker.name.fullName()}`,
    },
    {
      id: 4,
      dayOfWeek: faker.date.weekday({ abbr: true }),
      fullName: `Dr.${faker.name.fullName()}`,
    },
    {
      id: 5,
      dayOfWeek: faker.date.weekday({ abbr: true }),
      fullName: `Dr.${faker.name.fullName()}`,
    },
  ]
  return (
    <SafeAreaView className="bg-white">
      <View className="mx-7 flex-row items-center">
        <View className="flex-1">
          <Text className="text-2xl font-bold">Schedule</Text>
        </View>
        <Icon type={Icons.MaterialCommunityIcons} name="calendar" size={24} color={'#7B8D9E'} />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 10,
          paddingBottom: 25,
        }}
      >
        {fakeDataArr.map((data, index) => {
          return (
            <ScheduleDateCard
              bgColor={index == 0 ? 'firstBg' : 'secondBg'}
              textColorLg={index == 0 ? 'firstTextLg' : 'secondTextLg'}
              textColorSm={index == 0 ? 'firstTextSm' : 'secondTextSm'}
              dayOfWeek={data.dayOfWeek}
              key={data.id}
            />
          )
        })}
      </ScrollView>
      <ScheduleDayCard />
    </SafeAreaView>
  )
}

export default Shchedule
