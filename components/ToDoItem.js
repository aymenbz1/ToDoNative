import React from 'react'

import {StyleSheet ,Text,View,TouchableOpacity } from 'react-native'

export default function ToDoItem ({item ,PressHandler}) {

    return (
      <TouchableOpacity onPress={()=> PressHandler(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
     </TouchableOpacity>

    )
}

 const styles=StyleSheet.create({
     item:{
         padding:16,
         marginTop:16,
         borderColor: '#bbb',
         borderWidth:1,
     }
 })