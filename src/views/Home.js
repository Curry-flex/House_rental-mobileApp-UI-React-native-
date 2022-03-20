import { SafeAreaView, StatusBar, StyleSheet, Text, View,Image, ScrollView, TextInput, FlatList, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../color/color'
import Icon from "react-native-vector-icons/MaterialIcons"
import Listoptions from './Listoptions'
import Categories from './Categories'
import houses from '../Data/house'
import Card from './Card'
const {width} =Dimensions.get("screen")

export default function Home({navigation}) {
  return (
    <SafeAreaView style={{backgroundColor:"white" ,flex:1}}>
         <StatusBar 
         translucent={false}
         backgroundColor={Colors.white}
         barStyle="dark-content"
         />
        <View style={styles.header}>
           <View>
               <Text style={{color:Colors.grey,fontWeight:"bold"}}>location</Text>
               <Text style={{color:"black",fontSize:20,fontWeight:"bold"}}>Tanzania</Text>
           </View>

           <Image  
            source={require('../assets/profile.jpg')}
            style={styles.image}
           />
        </View>

        <ScrollView>
            <View style={{flexDirection:"row",justifyContent:"space-between",paddingHorizontal:20}}>
               <View style={styles.Searchcontainer}>
                 <Icon name="search" size={25} color={Colors.grey} />
                 <TextInput 
                 placeholder="search address,city,location"
                 placeholderTextColor={"black"}
                 style={{color:"black"}}
                 />
               </View> 
               <View style={styles.sort}>
                   <Icon name="sort" size={35} color="white" />
               </View>

             </View>

             <Listoptions />
             <Categories />

             <FlatList 
             snapToInterval={width-20}
              contentContainerStyle={{paddingLeft:20,paddingVertical:20}}
               horizontal
               showsHorizontalScrollIndicator={false}
              data={houses}
              renderItem={({item})=> <Card house={item}  navigation={navigation}/>}
             />
        </ScrollView>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
   header:{
       flexDirection:"row",
       justifyContent:"space-between",
       paddingHorizontal:20,
       paddingVertical:20
   },
   image:{
       height:50,
       width:50,
       borderRadius:100,
       marginTop:5
   },
   Searchcontainer:{
       height:50,
       backgroundColor:Colors.light,
       flex:1,
       flexDirection:"row",
       alignItems:"center",
       paddingHorizontal:20,
       borderRadius:10
   },
   sort:{
    height:50,
    width:50,
    backgroundColor:Colors.dark,
    borderRadius:10,
    alignItems:"center",
    justifyContent:"center"
   }
})