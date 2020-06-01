import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {

  return <View>
    <Text style={styles.text}>HomeScreen this is the home screen component</Text>
    <Button 
    title ="Go to Components demo"
    onPress={()=>navigation.navigate('Components')}
    />
    <Button 
    title ="Go to list demo"
    onPress={()=>navigation.navigate('List')}
    />
    <Button
    title ="Go to image screen"
    onPress={()=>navigation.navigate('Image')}/>
    <TouchableOpacity style={styles.touchable} onPress={()=>navigation.navigate("Count")}>
        <Text>Go to counter</Text>
    </TouchableOpacity>
  
    <Button title ="Color Generator"
    onPress={()=>navigation.navigate("Color")}/>
    
    <Button title ="Square Screens"
    onPress={()=>navigation.navigate("Square")}/>

    </View>
};

const styles = StyleSheet.create({
  touchable:{
  alignItems: 'center',
  }

});

export default HomeScreen;
