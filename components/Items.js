import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

export default function Items({count,title,onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={{height:150,width:200,backgroundColor:"#ffffff",top:100,borderRadius:5,margin:10,left:10}}>
        
     <Text style={{fontSize:20,marginTop:20,fontWeight:"bold",alignSelf:"center",color:"black"}}>{title}</Text>
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})