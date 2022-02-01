import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, Button, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import TodoList from './ TodoList';
import {styles} from "./styles/NotesStyles";
import Network from './source/Network';

export default function Notes ({route, navigation}) {
    const {idUser} = route.params;

  return (
    <ImageBackground source = {require('./image/backgroundNotes.jpeg')} resizeMode="cover" style={styles.image}>
        <Text style={styles.navbar}>Заметки</Text>
        <View style={styles.container}>
          <TodoList idUser={idUser} navigation={navigation} />
        </View>
    </ImageBackground>
) 

  }