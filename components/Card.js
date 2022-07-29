import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Card({count,title}) {
  return (
    <View style={{height:150,width:200,backgroundColor:"#ffffff",top:100,borderRadius:5,margin:10,left:10}}>
        <Text style={{fontSize:30,fontWeight:"bold",marginLeft:120,marginTop:20,color:"black"}}>{count}</Text>
        <Text style={{fontSize:20,marginTop:20,fontWeight:"bold",alignSelf:"center",color:"black"}}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})