import { Dimensions, StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import Colors from '../color/color'
import Icon from "react-native-vector-icons/MaterialIcons"
const {width} =Dimensions.get("screen")

export default function Card({house,navigation}) {
  return (
   <TouchableOpacity
   activeOpacity={0.6}
   onPress={() => navigation.navigate("details",house)}
   >

<View style={styles.card}>
     <Image  
      source={house.image}
      style={styles.image}
     />
     <View
     style={{
       marginTop:10,
       flexDirection:"row",
       justifyContent:"space-between"
     }}
     >
       <Text style={{color:"black",fontSize:16,fontWeight:"bold"}}>{house.title}</Text>
      <Text style={{color:Colors.blue,fontSize:16,fontWeight:"bold"}}>Tsh-{house.price}</Text>
     </View>
     <Text style={{color:Colors.grey,fontSizea:14,fontWeight:"bold", marginTop:5}}>{house.location}</Text>

     <View style={{marginTop:10,flexDirection:"row"}}>
     <View style={styles.facility}>
       <Icon  name='hotel' size={18} color="black"/>
       <Text style={styles.facilityText}>4</Text>
     </View>

     <View style={styles.facility}>
       <Icon  name='bathtub' size={18} color="black"/>
       <Text style={styles.facilityText}>2</Text>
     </View>

     <View style={styles.facility}>
       <Icon  name='aspect-ratio' size={18} color="black"/>
       <Text style={styles.facilityText}>200m</Text>
     </View>

     </View>
    </View>

   </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card:{
    height:250,
    backgroundColor:"white",
    elevation:10,
    width:width -40,
    marginRight:20,
    padding:15,
    borderRadius:20
  },
  image:{
    width:"100%",
    height:120,
    borderRadius:15
  },

  facility:{
    flexDirection:"row",
    marginRight:15
  },
  facilityText:{
    marginLeft:5,
    color:Colors.grey
  }
})