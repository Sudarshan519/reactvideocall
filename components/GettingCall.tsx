import React from "react";
import {View, Text, StyleSheet,Image} from 'react-native';  
import Button from "./Button";
interface Props{
    hangup:()=>void;
    join:()=>void;
}
export default function GettingCall(props:Props){
    return <View style={StyleSheet.container}>
       <View styles={StyleSheet.bContainer}>
           <Button iconName="phone" backgroundColor="green" onPress={props.join} style={{marginRight:30}}></Button>
           <Button iconName="phone" backgroundColor="red" onPress={props.hangup} style={{marginLeft:30}}></Button>
       </View>
    </View>
}
const styles=StyleSheet.create({
    container:{
        position:'absolute',
        height: '100%',
        width:'100%',
        flex:1,justifyContent:'flex-end',
        alignItems:'center'
    },
    image:{},
    bContainer:{
          flexDirection:'row',
        bottom:30
    }
})