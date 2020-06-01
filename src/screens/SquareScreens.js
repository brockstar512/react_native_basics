import React, {useState} from 'react'
import {View, Text, StyleSheet}from 'react-native'
import ColorCounter from './Components/ColorCounter'

const SquareScreens =()=>{
    const [redColor, setRedColor] =useState(0)
    const [blueColor, setBlueColor] =useState(0)
    const [greenColor, setGreenColor] =useState(0)
  
    const COLOR_INCREMENT =10

    const setColor =(color,change)=>{
        switch(color){
            case 'red':
                redColor + change > 255 || redColor + change < 0 ? null : setRedColor(redColor + change)
                return
            case 'blue':
                blueColor + change > 255 || blueColor + change < 0 ? null : setBlueColor(blueColor + change)
                return
            case 'green':
                greenColor + change > 255 || greenColor + change < 0 ? null : setGreenColor(greenColor + change)
                return
            default:
                return
        }
    }
    
    return<View>
        <ColorCounter 
        onIncrease = {()=> setColor('red', COLOR_INCREMENT)} 
        onDecrease ={()=>setColor('red', -1 * COLOR_INCREMENT)} 
        color ="Red"/>
        <ColorCounter 
        onIncrease = {()=> setColor('blue' , COLOR_INCREMENT)} 
        onDecrease ={()=>setColor('blue', -1 * COLOR_INCREMENT)} 
        color ="Blue"/>
        <ColorCounter 
        onIncrease = {()=> setColor('green' , COLOR_INCREMENT)} 
        onDecrease ={()=>setColor('green', -1 * COLOR_INCREMENT)} 
        color="Green"/>
        <View style={{
            height:150, 
            width:150, 
            backgroundColor: `rgb(${redColor},${blueColor},${greenColor})`,
            }}/>
    </View>
}
const styles = StyleSheet.create({})
export default SquareScreens