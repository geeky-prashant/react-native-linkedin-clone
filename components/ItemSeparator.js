import { View, Text } from 'react-native'
import React from 'react'
import Colors from '../utils/Colors'

export default function ItemSeparator() {
  return (
    <View style={{
      borderTopColor: Colors.LIGHT_GRAY, borderTopWidth: 1, width: "75%", marginLeft: "25%"
    }} />
  )
}