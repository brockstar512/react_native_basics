import React from 'react'
import {View, Text, Image,StyleSheet} from 'react-native'
import ImageDetail from './Components/ImageDetail'

const ImageScreen = () =>{
    return <View>
        <ImageDetail title="Beach"imageSource ={require("../../assets/beach.jpg")}score ={4}/>
        <ImageDetail title="Forest" imageSource ={require("../../assets/forest.jpg")}score={8}/>
        <ImageDetail title="Mountain"imageSource ={require("../../assets/mountain.jpg")}score={8}/>
        </View>
}
const styles =StyleSheet.create({})
export default ImageScreen