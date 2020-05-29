import React from 'react'
import {View, Text, Image,StyleSheet} from 'react-native'
import ImageDetail from './Components/ImageDetail'

const ImageScreen = () =>{
    return <View>
        <ImageDetail title="Forrest"/>
        <ImageDetail title="Beach"/>
        <ImageDetail title="Mountain"/>
        </View>
}
const styles =StyleSheet.create({})
export default ImageScreen