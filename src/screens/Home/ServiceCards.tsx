import { Image, View } from 'react-native'
import React from 'react'

type colorCard = {
  color: string
  img: string
}

const ServiceCards = (props: colorCard) => {
  const { color, img } = props
  const colorVariants = {
    gr: 'mx-2 h-20 w-20 rounded-2xl bg-[#DCEDF9] items-center justify-center',
    yel: 'mx-2 h-20 w-20 rounded-2xl bg-[#FAF0DB] items-center justify-center',
    bl: 'mx-2 h-20 w-20 rounded-2xl bg-[#D6F6FF] items-center justify-center',
    pink: 'mx-2 h-20 w-20 rounded-2xl bg-[#F2E3E9] items-center justify-center',
  }

  const iconVariants = {
    dr: require('../../images/icons/DoctorIcon.png'),
    pill: require('../../images/icons/PillowIcon.png'),
    medCard: require('../../images/icons/MedicalCardIcon.png'),
    covid: require('../../images/icons/CovidIcon.png'),
  }

  return (
    <View className={`${colorVariants[color]} ...`}>
      <Image source={iconVariants[img]} />
    </View>
  )
}

export default ServiceCards
