import React, { Component, useEffect, useState } from 'react'
import { Button, Text, View } from 'react-native'

const GetDataFromAPI = () => {
  let dt
  function clickMe() {
    const [data, setData] = useState([])
    console.log(data)
    useEffect(() => {
      fetch('https://135c-93-170-124-107.eu.ngrok.io/calcproperties/?metan=98.9')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
    }, [])
    return data
  }
 const data = clickMe()
  return (
    <View>
      <Text>{data}</Text>
      <Button title="Click Me" onPress={clickMe} />
    </View>
  )
}

export default GetDataFromAPI
