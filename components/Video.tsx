import React from "react";
import {View, Text, StyleSheet,Image} from 'react-native';  
import Button from "./Button";
import {MediaStream } from 'react-native-webrtc';
interface Props{
    hangup:()=>void;
    localStream?:MediaStream|null;
    remoteStream?:MediaStream|null;
}
function ButtonContainer(props:Props){
    return <View style={styles.bContainer}>
        <Button iconName="phone" backgroundColor="red" onPress={props.hangup}
   /> </View>
}
export default function Video(props:Props){
    if(props.localStream&&!props.remoteStream)
    return <View style={styles}>
        <RTCView
         streamUrl={props.localStream.toURL()}
         objectFit={'cover'}
         style={styles.video}
        /> 
    </View>
    return <ButtonContainer hangup={props.hangup}></ButtonContainer>
}
   
      

   
 
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
    },
    video:{
        position:"absolute",width:"100%"
        ,height:"100%",
    },
    bContainer:'row',bottom:20})