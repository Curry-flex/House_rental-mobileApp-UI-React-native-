import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '../color/color'

export default function Categories() {
    const categoryList =["Popular","Nearest","Recommended"]
    const[categoryIndex,setCategoryIndex] = useState(0)
  return (
    <View style={styles.catCntainer}>
      {
          categoryList.map((cat,index)=>(
              <TouchableOpacity
              onPress={() =>setCategoryIndex(index)}
              >
              <Text style={[styles.catList ,categoryIndex ==index ? styles.active:""]}>{cat}</Text>
              
              </TouchableOpacity>
              
          ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
    catCntainer:{
        marginTop:40,
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:20
    },
    catList:{
        fontSize:16,
        fontWeight:"bold",
        paddingBottom:5,
        color:Colors.grey
    },
    active:{
        borderBottomWidth:2,
        color:Colors.dark,
        paddingBottom:5
    }
})