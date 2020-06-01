import React, {useState} from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";


const Counter =()=>{
const [counter, setCount]=useState(0)

return(
    
    <View>
        <Button title="+" onPress ={()=> {setCount(counter +1)}}/>
        <Button title="-"onPress ={()=> {setCount(counter-1)}}/>
        <Text>Current Count: {counter}</Text>
    </View>
)

}

const styles = StyleSheet.create({})

export default Counter
