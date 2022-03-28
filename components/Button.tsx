import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
interface Props{onPress?:any,iconName:string,backgroundColor:string,style?:any}
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Button(props:Props) {
  return (
    <View style={styles.container}>
      {/* <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.logo} />
      <Text style={styles.instructions}>
        To share a photo from your phone with a friend, just press the button below!
      </Text> */}

      <TouchableOpacity
        onPress={props.onPress}
        style={[ {backgroundColor:props.backgroundColor },props.style,styles.button]} 
 ><Icon name={props.iconName} color= "white" size= {20}/></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button:{width:60,height:60,padding:10,elevation:10,justifyContent:"center",alignItems:"center",borderRadius:100}
});