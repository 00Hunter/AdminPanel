import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from '../components/Card'
import { ScrollView } from 'react-native-gesture-handler'

export default function HomeScreen() {
  return (
    <View style={{marginLeft:80}}>
        <Card count={90} title={"Total Vehicle"}/>
        <Card count={90} title={"Total Property"}/>
        <Card count={90} title={"Total Survey"}/>
    </View>
  )
}

const styles = StyleSheet.create({})