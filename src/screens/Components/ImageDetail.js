import React from 'react'
import {View, Text, Image,StyleSheet} from 'react-native'


const ImageDetail = ({title, imageSource, score}) =>{
return <View>
    <Image source ={imageSource}/>
    <Text>Show image of {title}</Text>
    <Text>This image has a rating {score}</Text>
    </View>
}
const styles =StyleSheet.create({})
export default ImageDetail 
