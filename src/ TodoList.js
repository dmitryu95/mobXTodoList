import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
} from "react-native";
import TodoItem from "./TodoItem";
import { Network } from './source/Network';
import AddNote from "./AddNote";
import { StoreToDo } from './stores/noteStore';
import { Store } from './stores/emailPasswordStore';
import { observer } from 'mobx-react';

import { styles } from './styles/AddNotesStyles';

const TodoList = observer(({ navigation }) => {
  // const [listOfItems, setListOfItems] = useState('');
  // const [title, setTitle] = useState("");
  // const [completeTask, setCompleteTask] = useState(false);

  // const openAuth = () => { navigation.navigate('Auth') }
  // const cleanList = () => ( setListOfItems('') )  
  // const logout = () => ( Network("Users/logout?access_token=",idUser, "POST") )

  /* text - то, что ввел пользователь */
////////////////////////////////////////////////////////////
  // const fullUrl="tasks?access_token=";
  // const Method = "GET"

  // console.log("фулл сработал:", fullUrl+idUser);

    useEffect(() => {
    //   .then(response => setListOfItems(response))
      StoreToDo.setListOfItems()
    }, [])   /*Внести параметр [] */
  
////////////////////////////////////////////////////////////

  // const addNewNote = (title) => {
  //   setListOfItems((list) => {
  //     return [
  //       {
  //         title: title,
  //         id: Math.random().toString(36).substr(2),
  //         completeTask: false,
  //       },
  //       ...list,
  //     ];
  //   })
  //   Network(fullUrl, idUser, "POST", {title})
  //   setTitle("");
  // };

  // const deleteNote = (id) => {
  //   setListOfItems((list) => (
  //     Network(`tasks/${id}?access_token=`, idUser, "DELETE"),
  //     list.filter((listOfItems) => listOfItems.id != id)
  //   )
  //   );
  // };

  // const renderItem = ({ item }) => {
  //   return (
  //     <View>
  //       <TodoItem item={item} />
  //         <TodoItem item={item} deleteNote={deleteNote} />
  //     </View>
  //   );
  // };


  const renderItem = ({item}) => {
    return (
        <Text>
          проверка вывода
          {item.title}
        </Text>
      )
  }

  return (
    <View>
      <View style={styles.inputeBlock}>
         <TextInput 
          style={styles.input} 
          value={StoreToDo.title}
          onChangeText={(text) => StoreToDo.setTitle(text)} 
          placeholder='Введите заметку...'/>
        <TouchableOpacity 
          style={styles.add} 
          onPress={() => StoreToDo.addNewNote()} >
          <Text style={styles.text}>+</Text>
        </TouchableOpacity> 
      </View>
      <View>
        {console.log("массив", StoreToDo.listOfItems )}
        <FlatList
          data={StoreToDo.listOfItems}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
      {/* <View>
      <TouchableOpacity
        onPress={() => { cleanList(); logout(); openAuth() }}>
        <Text style={{fontSize: 20}}>Выйти из учетной записи</Text> 
      </TouchableOpacity>
      </View> */}
    </View>
  );
})

export default TodoList;
