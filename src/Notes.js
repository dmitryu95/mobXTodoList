import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import TodoList from './ TodoList';
import {styles} from './styles/NotesStyles';
import {inject, observer} from 'mobx-react';
import {StoreToDo} from './stores/noteStore';

const Notes = inject(
  'Store',
  'StoreToDo',
)(
  observer(({navigation}) => {
    return (
      <ImageBackground
        source={require('./image/backgroundNotes.jpeg')}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.header}>
          <View style={styles.noteTitle}>
            <Text style={styles.text}>Заметки</Text>
          </View>
        </View>
        <View style={styles.container}>
          <TodoList
            navigation={navigation}
            listOfItems={StoreToDo.listOfItems}
            title={StoreToDo.title}
            setTitle={StoreToDo.setTitle}
            addNewNote={StoreToDo.addNewNote}
            setListOfItems={StoreToDo.setListOfItems}
          />
        </View>
      </ImageBackground>
    );
  }),
);

export default Notes;
