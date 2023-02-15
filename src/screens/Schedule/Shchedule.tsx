import Icon, { Icons } from '../Icons'
import { faker } from '@faker-js/faker'
import React, { useState } from 'react'
import GetDataFromAPI from './getDataFromAPI'
import ScheduleDayCard from './ScheduleDayCard'
import ScheduleDateCard from './ScheduleDateCard'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, ScrollView, TextInput } from 'react-native'

const Shchedule = () => {
  const [text, setText] = useState('')

  const handleKeyPress = ({ nativeEvent: { key: keyValue } }) => {
    console.log(keyValue)
    if (keyValue === undefined) {
      console.log('Done!')
    }
  }

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
      <GetDataFromAPI/>
    </SafeAreaView>
  )
}

export default Shchedule
