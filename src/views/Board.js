import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../color/color'

export default function Board({navigation}) {
  return (
   
    <SafeAreaView style={{flex:1,backgroundColor:Colors.white}}>
        <StatusBar 
        translucent
        backgroundColor={Colors.transparent}
        />
      <Image 
      source={require("../assets/onboardImage.jpg")}
      style={styles.image}
      />
      <View style={styles.category}>

       <View style={styles.indicator}/>
       <View style={styles.indicator}/>
       <View style={styles.indicator}/>
       <View style={[styles.indicator,styles.active]}/>

      </View>

      <View style={{paddingHorizontal:20 ,paddingTop:20}}>
        <View>
            <Text style={styles.title}>Are you looking</Text>
            <Text style={styles.title}>For a good House?</Text>
        </View>

        <View style={{marginTop:10}}>
          <Text style={styles.info}>Houses which have best conditions</Text>
          <Text style={styles.info}>Your request our service</Text>
        </View>

        <View style={{marginTop:40}}>
            <TouchableOpacity
             style={styles.button}
             activeOpacity={0.7}
             onPress={()=>navigation.navigate("home")}
            >
                <Text style={{fontSize:20,fontWeight:"bold"}}>Get started</Text>
            </TouchableOpacity>  
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    image:{
        height:420,
        width:"100%",
        borderBottomLeftRadius:100,
        marginBottom:10

    },

    category:{
        height:20,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    indicator:{
        height:5,
        width:30,
        backgroundColor:"black",
        marginHorizontal:5,
        fontSize:20,
        borderRadius:5
    },
    active:{
        backgroundColor:"blue"
    },
    title:{
         fontSize:30,
         fontWeight:"bold",
         color:"black"
    },
    info:{
        fontSize:16,
        color:Colors.grey
    },
     button:{
         height:60,
         backgroundColor:"black",
         alignItems:"center",
         justifyContent:"center",
         borderRadius:20
     }
})