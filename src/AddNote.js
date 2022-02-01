import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles/AddNotesStyles';

const AddNote = ({ addNewNote }) => {
    const [title, setTitle] = useState('');
    
    return(
        <View style={styles.inputeBlock}>
            <TextInput 
                style={styles.input} 
                onChangeText={setTitle} 
                value={title}
                placeholder='Введите заметку...'/>
            <TouchableOpacity 
                style={styles.add} 
                onPress={() => {( addNewNote(title), setTitle('') )}} >
            <Text style={styles.text}>+</Text>
            </TouchableOpacity>
        </View>
    )}

export default AddNote;