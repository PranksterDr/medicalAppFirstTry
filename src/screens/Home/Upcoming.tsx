import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import UpcomingCard from './UpcomingCard'

const dataArr = [
  {
    id: 1,
    date: 12,
    dayOfWeek: 'Tue',
    time: '09:30 AM',
    doctor: 'Dr.Mim Akhter',
    profile: 'Depression',
    color: 'rgba(21, 90, 150, 1)',
    bgColor: 'rgba(220, 237, 249, 1)',
  },
  {
    id: 2,
    date: 15,
    dayOfWeek: 'Fri',
    time: '08:15 PM',
    doctor: 'Dr.October',
    profile: 'Proctologist',
    color: 'rgba(224, 159, 31, 1)',
    bgColor: 'rgba(250, 240, 219, 1))',
  },
  {
    id: 3,
    date: 19,
    dayOfWeek: 'Wnd',
    time: '09:30 AM',
    doctor: 'Dr.Hearted',
    profile: 'Cardiologist',
    color: 'rgba(2, 156, 199, 1)',
    bgColor: 'rgba(214, 246, 255, 1)',
  },
]

const Upcoming = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {dataArr.map((data) => {
        return (
          <UpcomingCard
            key={data.id}
            date={data.date}
            dayOfWeek={data.dayOfWeek}
            time={data.time}
            doctor={data.doctor}
            profile={data.profile}
            color={data.color}
            bgColor={data.bgColor}
          />
        )
      })}
    </ScrollView>
  )
}

export default Upcoming
