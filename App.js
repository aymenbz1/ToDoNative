
import React,{useState} from 'react';
import { StyleSheet,View ,Text,FlatList } from 'react-native';
import Header from './components/Header'
import ToDoItem from './components/ToDoItem';
import AddToDo from './components/AddTodo';

export default function App() {

  const [todo, setTodo] = useState([
    {text :'Bouzaien', key:'1'},
    {text :'but coffee', key:'2'},
    {text :'Fitness App', key:'3'}
  
  ])

const PressHandler =(key)=>{
setTodo((prev)=> {
  return prev.filter(tod=>tod.key !=key)
})}

const SubmitHandler =(text)=>{
  setTodo((prev)=> {
    return [
      {text: text ,key : Math.random ().toString()},
      ...prev
    ]

  })}
  

  return (
    <View style={styles.container}>
     <Header/>
    <View style={styles.content}>
   {/* To form*/}
   <AddToDo SubmitHandler={SubmitHandler}/>
    <View style={styles.list}>

    <FlatList 
    data={todo}
    renderItem={({item}) =>(
      <ToDoItem item={item} PressHandler={PressHandler}/>
    )
    }/>

    </View>

     </View>
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
 
  },
});

