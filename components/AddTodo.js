import React,{useState} from 'react'

import {StyleSheet,View, Button,TextInput} from 'react-native'


export default function AddToDo ({SubmitHandler}) {

    const [text,setText]= useState('')

    const changeHandler = (val) =>{
        setText(val)
    }
    return (
    <View>

        <TextInput
         style={styles.input}
         placeholder='new todo List'
         onChangeText={changeHandler}
         />
    <Button onPress={ ()=>SubmitHandler(text)} title='Add New Line' color='coral' />
    </View>

    )
}

 const styles=StyleSheet.create({
        input:{
         marginBottom:10,
         paddingHorizontal:16,
         paddingVertical:6,

         borderBottomWidth:1,
         borderBottomColor: '#ddd',
     }
 })