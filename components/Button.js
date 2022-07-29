import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'


export default function Button({onPress,title}) {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={{width:"95%",margin:10,height:30,backgroundColor:"#ff4d4d",borderRadius:6}}>
      <Text style={{color:"white",alignSelf:"center"}}>{title}</Text>
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})