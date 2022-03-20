import { StyleSheet, Text, View,Image, Dimensions } from 'react-native'
import React from 'react'

const {width} = Dimensions.get("screen")
export default function Interior({image}) {
  return (
    <Image  source={image} style={styles.image}/>
  )
}

const styles = StyleSheet.create({
    image:{
        width:width/3-20,
        height:80,
        marginRight:10,
        borderRadius:10
    }
})