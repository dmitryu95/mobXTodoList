import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { observe } from 'react-native/Libraries/LogBox/Data/LogBoxData';
import { styles } from './styles/AddNotesStyles';
import { StoreToDo } from './stores/noteStore';

const AddNote = observe(() => {
    return(
        <View style={styles.inputeBlock}>
            <TextInput 
                style={styles.input} 
                value={StoreToDo.title}
                // onChangeText={(text) => StoreToDo.setTitle(text)} 
                placeholder='Введите заметку...'/>
            <TouchableOpacity 
                style={styles.add} 
                onPress={StoreToDo.addNewNote()} >
            <Text style={styles.text}>+</Text>
            </TouchableOpacity>
        </View>
    )})


    // const AddNote = observe(({ addNewNote }) => {

    // const [title, setTitle] = useState('');
    
    // return(
    //     <View style={styles.inputeBlock}>
    //         <TextInput 
    //             style={styles.input} 
    //             onChangeText={setTitle} 
    //             value={title}
    //             placeholder='Введите заметку...'/>
    //         <TouchableOpacity 
    //             style={styles.add} 
    //             onPress={() => {( addNewNote(title), setTitle('') )}} >
    //         <Text style={styles.text}>+</Text>
    //         </TouchableOpacity>
    //     </View>
    // )}

export default AddNote;

