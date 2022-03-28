import React, {useEffect} from 'react';
import {View, TouchableOpacity, Text, FlatList, TextInput} from 'react-native';
import TodoItem from './TodoItem';
import {StoreToDo} from './stores/noteStore';
import {inject, observer} from 'mobx-react';
import {styles} from './styles/AddNotesStyles';
import EditItem from './EditItem';
import Confirmation from './Confirmation';

const TodoList = inject('StoreToDo')(
  observer(
    ({
      listOfItems,
      title,
      setTitle,
      addNewNote,
      setListOfItems,
    }) => {
      useEffect(() => {
        setListOfItems();
      }, []);

      const renderItem = ({item}) => {
        const backgroundColor =
          item.done
            ? (StoreToDo.color = '#74dba4')
            : (StoreToDo.color = 'white');
        return (
          <View>
            <TodoItem item={item} backgroundColor={backgroundColor} />
          </View>
        );
      };

      return (
        <View>
          <View style={styles.inputeBlock}>
            <TextInput
              style={styles.input}
              value={title}
              onChangeText={text => setTitle(text)}
              placeholder="Введите заметку..."
            />
            <TouchableOpacity style={styles.add} onPress={() => addNewNote()}>
              <Text style={styles.text}>+</Text>
            </TouchableOpacity>
          </View>
          <View>
            <FlatList
              data={listOfItems}
              keyExtractor={item => listOfItems.id}
              renderItem={renderItem}
            />
          </View>
          <EditItem />
          <Confirmation />
        </View>
      );
    },
  ),
);

export default TodoList;
