import React from 'react'
import { Image, ScrollView, View } from 'react-native'
import ServiceCards from './ServiceCards'

const Services = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      <ServiceCards color="gr" img="dr" />
      <ServiceCards color="yel" img="pill" />
      <ServiceCards color="bl" img="medCard" />
      <ServiceCards color="pink" img="covid" />
    </ScrollView>
  )
}

export default Services
