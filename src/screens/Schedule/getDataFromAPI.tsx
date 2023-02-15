import React, { Component, useEffect, useState } from 'react'
import { Button, Text, View } from 'react-native'
import ExData from './ExData'
import { TouchableOpacity } from 'react-native'

const GetDataFromAPI = (props) => {
  const [prompt, setPrompt] = useState(false)
  return (
    <View>
      <Button title="Click Me" onPress={() => setPrompt(!prompt)} />
      {prompt ? <ExData /> : null}
    </View>
  )
}

export default GetDataFromAPI
