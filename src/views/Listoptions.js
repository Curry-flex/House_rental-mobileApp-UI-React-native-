import { Dimensions, StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
const {width} =Dimensions.get("screen")

export default function Listoptions() {
    const Lists=[
    
            {title:'Buy a home', image:require('../assets/house1.jpg')},
            {title:'Rent a home', image:require('../assets/house2.jpg')}
    
       ]
  return (
    <View style={styles.optionContainer}>
      {
          Lists.map((list,index)=>(
            <View style={styles.card} key={index}>
              <Image 
               source={list.image}
               resizeMode="contain"
               style={styles.image}
              />
              <Text style={styles.text}>{list.title}</Text>
            </View>   
          ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
    optionContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:20,
        marginTop:20
    },

    card:{
        height:210,
        width:width/2 - 30,
        elevation:15,
        backgroundColor:"white",
        alignItems:"center",
        borderRadius:20,
        paddingTop:10,
        paddingHorizontal:10
    },
    image:{
        height:140,
        width:"100%",
        borderRadius:10
    },

    text:{
        color:"black",
        fontSize:20,
        fontWeight:"bold"
    }
})