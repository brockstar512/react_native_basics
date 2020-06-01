import React, {useState} from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity, FlatList } from "react-native";
import { Colors } from 'react-native/Libraries/NewAppScreen';


const RandomColorGen =()=>{
const[color, setColor ]=useState([])
// console.log(color)
return(
    <View>
        <Button title="Add Color" onPress={()=>{
            setColor([...color,randomRgb()])
        }}/>
        <View style={{height:100,width:100, backgroundColor: randomRgb()}}/>
        <FlatList
        keyExtractor={(item)=>item}
        //data that we want to turn into a list
        data = {color}
        renderItem={({item})=>{
            return <View style={{height:100,width:100, backgroundColor: item}}/>
        }}
        />

        
    </View>
)

}

const randomRgb = () =>{
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red},${green},${blue})`
}

const styles = StyleSheet.create({})

export default RandomColorGen
