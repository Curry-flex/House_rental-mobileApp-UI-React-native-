import { FlatList, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import Colors from '../color/color'
import Interior from './interior'


export default function Details({route,navigation}) {
 const houseData =route.params
  return (
    <SafeAreaView style={{flex: 1,backgroundColor:"white"}}>
    <ScrollView>
      <View style={styles.imageContainer}>
    <ImageBackground
      style={styles.imageBackground}
      source={houseData.image}
    >
      <View style={styles.header}>

       <View style={styles.Headerbutton}>
         <TouchableOpacity
         onPress={()=>navigation.goBack()}
         >
         <Icon name="arrow-back-ios" size={20} color="black" />
         </TouchableOpacity>
       
       </View>

       <View style={styles.Headerbutton}>
       <Icon name="favorite" color="red" size={20} />
       </View>

      </View>
    </ImageBackground>

    <View style={styles.attach}>
        <Text style={{color:"white" ,fontSize:15, fontWeight:"bold"}}>Good condtion</Text>
    </View>
    </View>

    <View style={styles.detailsContainer}>
     <View
     style={{
       flexDirection:"row",
       justifyContent:"space-between",
       marginTop:10
     }}
     >
      <Text style={{color:"black",fontSize:20,fontWeight:"bold"}}>{houseData.title}</Text>
      <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
       <View style={{height:30,width:35,backgroundColor:"blue",justifyContent:"center",alignItems:"center",borderRadius:10}}>
          <Text style={{color:"white"}}>4.8</Text>
       </View>
       <Text style={{color:"black",fontSize:13,marginLeft:5}}>200 Ratings</Text>
      </View>

     </View>
     <Text style={{fontSize:16,color:"grey"}}>{houseData.location}</Text>
     <View style={{marginTop:20,flexDirection:"row"}}>
     <View style={styles.facility}>
       <Icon  name='hotel' size={25} color="black"/>
       <Text style={styles.facilityText}>4</Text>
     </View>

     <View style={styles.facility}>
       <Icon  name='bathtub' size={25} color="black"/>
       <Text style={styles.facilityText}>2</Text>
     </View>

     <View style={styles.facility}>
       <Icon  name='aspect-ratio' size={25} color="black"/>
       <Text style={styles.facilityText}>200m</Text>
     </View>

     </View>

     <Text style={{color:Colors.grey,marginTop:20,fontWeight:"bold"}}>{houseData.details}</Text>

     <FlatList
     keyExtractor={(_,index)=> index.toString()}
     contentContainerStyle={{marginTop:20}}
     horizontal
     showsHorizontalScrollIndicator={false}
     data={houseData.interiors}
     renderItem={({item})=> <Interior image={item}/>}
     />
     
     <View style={styles.footer}>
       <View>
         <Text style={{color:"black",fontSize:18,fontWeight:"bold",color:Colors.blue}}>Tsh-{houseData.price}</Text>
         <Text style={{color:"black",fontSize:13,fontWeight:"bold"}}>Total Price</Text>
       </View>

       <View
       style={{
         height:50,
         width:100,
         backgroundColor:"black",
         justifyContent:"center",
         alignItems:"center",
         borderRadius:12
       }}
       >
         <Text style={{color:"white"}}>Book now</Text>
       </View>
     </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  imageContainer:{
    elevation:20,
    marginHorizontal:20,
    marginTop:20,
    alignItems:"center",
    height:350
  },
  imageBackground:{
     height:"100%",
     width:"100%",
     borderRadius:20,
     overflow:"hidden"

  },
  header:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingVertical:20,
    paddingHorizontal:20
  },
  Headerbutton:{
    height:50,
    width:50,
    backgroundColor:"white",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:10
    },

    attach:{
      backgroundColor:"black",
      top:-20,
      height:50,
      width:150,
      borderRadius:10,
      alignItems:"center",
      justifyContent:"center"  
    },
    detailsContainer:{
      flex:1,
      paddingHorizontal:20,
      marginTop:40
    },
    facility:{
      flexDirection:"row",
      marginRight:15
    },
    facilityText:{
      marginLeft:5,
      color:Colors.grey
    },
    footer:{
      height:70,
      backgroundColor:Colors.light,
      paddingHorizontal:20,
      borderRadius:10,
      marginVertical:20,
      alignItems:"center",
      justifyContent:"space-between",
      flexDirection:"row",
    }
})