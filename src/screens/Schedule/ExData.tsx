import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

const ExData = () => {
  const [data, setData] = useState([])
  console.log(data)

  useEffect(() => {
    fetch('https://135c-93-170-124-107.eu.ngrok.io/calcproperties/?metan=98.9')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
  }, [])
  return (
    <View>
      <Text>{data}</Text>
    </View>
  )
}

export default ExData
